
const treeData = [
  {title:'xxx',key:'xxx',children:[]},
];


const makesub=(r,i)=>{
r.keys().map((item)=>{
 //console.log(item)
  const _pos = item.substring(2,5)
  const head = treeData[i]
  if(!head.children.find(x=>x.key === head.key + "-" +_pos[0])){
    head.children.push
    (
      {
        title : _pos,
        key : head.key + "-" +_pos[0],
        isLeaf : false,
        children : []
      }
    )
  }
  if(!head.children.find(x=>x.key === head.key + "-" + _pos[0])
  .children.find(x=>x.key === head.key +"-" + _pos[0]+ "-" +_pos[1]))
  {
    if(_pos === "yyy"){
      head.children[head.children.length-1].children.push
      (
        {
          title : item.substring(8,item.length),
         key: head.key +item,
         name : r(item),
         isLeaf : true,
        }
      )
    }
    else if(_pos === "zzz"){
      head.children[head.children.length-1].children.push(
        {
          title : item.substring(6,item.length),
          //key: head.key + '/' + _pos + item,
          //name : r(item).default,
          isLeaf : true,
        }
      ) 
      //console.log("name", r(item)) 
    }
  }
})
}


let r = require.context('../xxx',true);
makesub(r,0);
r = null;


export default treeData