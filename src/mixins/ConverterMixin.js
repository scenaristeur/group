export default {
  methods: {
    localname(uri){
      var ln = uri;
      if (uri.split('#')[1] == 'this'){
        ln = decodeURI(ln.split("/").pop())
        return ln
      }else if(uri.split('#')[1] == "me" || uri.split('#')[1] == "we" ){
        return ln
      }else if(uri!= undefined){
        if ( uri.lastIndexOf("#") != -1) { ln = uri.substr(uri.lastIndexOf("#")).substr(1)}
        else{ ln = uri.substr(uri.lastIndexOf("/")).substr(1) }
        ln = ln.length == 0 ? uri : ln
      }
      return ln
    },
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
  }
}
