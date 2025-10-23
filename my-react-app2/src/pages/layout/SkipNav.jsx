export default function SkipNav({targetId = "container" }) {
  return (
    <p id="accessibility"><a href={`#${targetId}`}>본문바로가기</a></p> 
  );
}