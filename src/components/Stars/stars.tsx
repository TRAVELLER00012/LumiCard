import useStars from "../../hooks/useStars"

const Stars = ({position} : {position: "TR" | "BL"}) => {
  const [blueStars,redStars] = useStars()
  
  if (position == "TR"){
    return(
      <>
        {blueStars.tr.map((s,i) => (
            <span key={i+0}>{s}</span>
        ))}
        {redStars.tr.map((s,i) => (
            <span key={i+1}>{s}</span>
        ))}
      </>
    )
  }else{
    return (
      <>
        {blueStars.bl.map((s,i)=> (
          <span key={i+2}>{s}</span>
        ))}
        {redStars.bl.map((s,i) => (
          <span key={i+3}>{s}</span>
        ))}
      </>
    )
  }
}

export default Stars