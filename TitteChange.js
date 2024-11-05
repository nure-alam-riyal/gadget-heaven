// const riyal=document.getElementById('title"').innerHTML
// specification.map((data,ind)=><li key={ind}>{data}</li>)
const TitleChange=(name)=>{
  const newname=name.slice(1)
  if(newname.length===0)
    document.getElementById('title').innerHTML=`Gadget|Gadged Heaven`;
   else
   document.getElementById('title').innerHTML=`${newname}|Gadged Heaven`;


}
export default TitleChange