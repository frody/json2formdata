var Json2Formdata = function(){
  var self = this;
  self.getFdata = function(obj) {
    self.formdata = new FormData;
    self.exec( obj );
    return self.formdata;
  };

  self.exec = function( obj, stackey ) {
    if( typeof(obj) === 'object' ){
      Object.keys(obj).forEach(function(key){
        if( stackey ){
          self.exec(obj[key],stackey.concat('[',key,']'));
        }else{
          self.exec(obj[key],key);
        }
      });
    }else if( typeof(obj) === 'undefined' ){
      self.formdata.append(stackey,'');
    }else{
      self.formdata.append(stackey,obj);
    }
  };

  self.getQryStr = function(){
    var qrystr = [];
    if( self.formdata ){
      self.formdata.forEach(function(val,key){
        qrystr.push(key.concat('=',val));
      });
    }
    return encodeURI(qrystr.join('&'));
  };
};