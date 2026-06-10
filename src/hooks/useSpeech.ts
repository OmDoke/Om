import { useCallback, useRef } from 'react';

/**
 * useSpeech — wrapper around window.speechSynthesis
 *
 * Voice priority order (most realistic Indian-English first):
 *   1. Microsoft Heera  — Indian English female (Windows)
 *   2. Microsoft Ravi   — Indian English male   (Windows)
 *   3. Google हिन्दी / Google India English (Chrome Android/Desktop)
 *   4. Any en-IN locale voice
 *   5. Any en-GB voice (closer accent than en-US)
 *   6. Any English voice as fallback
 */
export function useSpeech() {
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  /** Select the best available voice, preferring Indian English */
  const pickVoice = (utt: SpeechSynthesisUtterance) => {
    const voices = synth!.getVoices();
    if (!voices.length) return;

    const find = (pred: (v: SpeechSynthesisVoice) => boolean) =>
      voices.find(pred);

    const voice =
      // Windows — Microsoft Heera (Indian English female)
      find((v) => v.name.toLowerCase().includes('heera')) ||
      // Windows — Microsoft Ravi (Indian English male)
      find((v) => v.name.toLowerCase().includes('ravi')) ||
      // Chrome — Google India / Google हिन्दी English
      find((v) => v.name.toLowerCase().includes('google') && v.lang === 'en-IN') ||
      // Any en-IN voice
      find((v) => v.lang === 'en-IN') ||
      // Any en-GB (British — closer rhythm to Indian English than American)
      find((v) => v.lang === 'en-GB') ||
      // Fallback: any English voice
      find((v) => v.lang.startsWith('en'));

    if (voice) utt.voice = voice;
  };

  const speak = useCallback(
    (text: string, onStart?: () => void, onEnd?: () => void) => {
      if (!synth) return;
      synth.cancel();

      const utt = new SpeechSynthesisUtterance(text);
      // Slightly slower rate + slightly lower pitch → sounds more measured / natural
      utt.rate   = 0.88;
      utt.pitch  = 0.95;
      utt.volume = 1;

      // Voices may load async — try immediately, retry via event
      if (synth.getVoices().length > 0) {
        pickVoice(utt);
      } else {
        synth.addEventListener('voiceschanged', () => pickVoice(utt), { once: true });
      }

      utt.onstart = () => onStart?.();
      utt.onend   = () => onEnd?.();
      utt.onerror = () => onEnd?.();

      utteranceRef.current = utt;
      synth.speak(utt);
    },
    [synth] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const stop = useCallback(() => {
    synth?.cancel();
  }, [synth]);

  return { speak, stop };
}
