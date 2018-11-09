
# json2formdata

### Convert javascript object to FormData

***
```
var jsobj = {
  a: 1,
  aa: 11,
  aaa: 123,
  b: [
    2,
    3,
    {
      f: 4,
      g: 5,
      h: 6
    }
  ],
  i: {
    j: 7,
    k: 8,
    l: 9
  }
}

j2f = new Json2Formdata();
j2f.getFdata(jsobj);
j2f.getQryStr()
```
#
### Result
***
```
# FormData =>

a : 1
aa: 11,
aaa: 123,
b[0] : 2
b[1] : 3
b[2][f] : 4
b[2][g] : 5
b[2][h] : 6
i[j] : 7
i[k] : 8
i[l] : 9
```
```
# Query string =>

a=1&aa=11&aaa=123&b[0]=2&b[1]=3&b[2][f]=4&b[2][g]=5&b[2][h]=6&i[j]=7&i[k]=8&i[l]=9
```
#