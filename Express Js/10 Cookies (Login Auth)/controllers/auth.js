
async function postLoginAuth(req, res) {
  res.setHeader("Set-Cookie", [
    "isLogged=true; path=/;",
    "myContent=xyz; path=/;"
  ]);
  return  res.redirect("/")
}


async function getLoginAuth(req, res) {
  let head = req?.headers;
  head = Boolean(head?.cookie?.split(";")?.find((cookie) => cookie?.trim()?.startsWith("isLogged"))?.split("=")[1]);
  if(!head) return  res.render("./auth/login");
  return res.redirect("/")
}

async function homePageRoute(req, res) {
  let head = req?.headers;
  head = Boolean(head?.cookie?.split(";")?.find((cookie) => cookie?.trim()?.startsWith("isLogged"))?.split("=")[1]);
  if(head === true){
    return  res.render("index");
  }else{
    res.redirect("/login");
  }
}


export {postLoginAuth, getLoginAuth, homePageRoute}