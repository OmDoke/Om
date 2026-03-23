const fs = require('fs');
const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzcwZmQ0NjlmN2E3ZTQxZDc5NmYyMWU1MGQzNTI4ODdkEgsSBxDcg4iIrh8YAZIBIwoKcHJvamVjdF9pZBIVQhM3NzM1NDY2MTcyNzQ2ODA5OTQ5&filename=&opi=96797242";

fetch(url)
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('c:/Users/Admin/Desktop/tech/Om/stitch_landing.html', text);
    console.log('Saved to stitch_landing.html');
  })
  .catch(err => console.error(err));
