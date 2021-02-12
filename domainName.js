function domainName(url){
  const possibleUrlStart = ["http://","https://","www."]
  for(let i = 0;i<possibleUrlStart.length;i++){
    url = url.replace(possibleUrlStart[i],"")
  }
  let firstDot = url.indexOf(".");
  return url.slice(0,firstDot);
}

/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" */

