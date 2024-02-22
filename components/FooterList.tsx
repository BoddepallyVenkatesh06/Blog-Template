type Props = {
    title:string;
    list:string[]
}

const FooterList = ({title,list}:Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-medium">{title}</h2>
      <ul className="flex flex-col gap-2">
        {
            list.map((item,i)=>(
                <li key={i} className="footerLi">{item}</li>
            ))
        }
      </ul>
    </div>
  );
}

export default FooterList