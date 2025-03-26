### This library is available via CDN:
```HTML
<script src="https://cdn.jsdelivr.net/gh/Maksim-tr/IDgenerator.js@main/idgenerator.min.js"></script>
```

### Generate an ID:
```JavaScript
generateID() // to generate a 20-characters ID (uses a-z, A-Z, 0-9, '-' and '_' symbols) 
```
### Generate an ID with your custom length or symbols:
```JavaScript
generateID({ length: 10 }) // 10-characters ID
generateID({ allowedSymbols: "ABCDE12345" }) // allowing only these symbols. But the next functions can forbide ones of them
```
### Allowing/disallowing characters:
```JavaScript
generateID({ allowSpecChars: false }) // disallow special symbols in the ID
generateID({ allowNumbers: false }) // disallow numbers in the ID
generateID({ allowCapitalLetters: false }) // disallow capital letters in the ID
```
### Minimal length
```JavaScript
generateID({ min: 10 }) // if the length property is less than this one, the ID will be 10-characters
```
