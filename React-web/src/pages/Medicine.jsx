
import Tabs from "../components/Tabs/Tabs";


const Medicine = () => {
  const tabs = [
    { label: "탭1" },
    { label: "탭2" },
  ]
 
  return (
    <div className="sub">
        <div style={{height:"10rem"}}>

        </div>
        <Tabs 
          tabs={tabs} 
          defaultIndex={0} 
          onChange={(index) => {console.log("선택된 탭:", index)}}
        />
        <div style={{height:"200rem"}}>

        </div>
    </div>
  );
};

export default Medicine;
