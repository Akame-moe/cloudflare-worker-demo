
# cloudflare worker script demo 

### Deploy

1. register your cloudflare account.  
2. choose worker panel and new worker.  
3. then fill in the worker name you wanted.  
4. copy the `index.js` file content and paste to the left editor panel.  
5. click deploy button.


### Usage:

```bash
curl -G --data-urlencode "q=https://domain.com/path/to/file.txt" https://${filename}.${workername}.workers.dev
```

### example

```bash
curl -G --data-urlencode "q=https://www.google.com/robots.txt" https://index.akame.workers.dev
```
