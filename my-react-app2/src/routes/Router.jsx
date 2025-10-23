
import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx'
 
import Main from '../pages/main/Main.jsx';
import Summary from '../pages/company/Summary.jsx'; 
import Brand from '../pages/company/Brand.jsx';   
import Esg from '../pages/sustainability/Esg.jsx';  
import LowCarbonLng from '../pages/energy/LowCarbonLng.jsx';
import Renewable from '../pages/energy/Renewable.jsx'; 
import Welfare from '../pages/recruit/Welfare.jsx'; 
import Cultivation from '../pages/recruit/Cultivation.jsx';     


const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />,   
    children:[
        {  
            index: true,
            element: <Main />
        },
        {  
            path: "company",
            children:[
                {
                    path:"summary",
                    element:<Summary />
                },
                {
                    path:"brand",
                    element:<Brand />
                }
            ]
            
        },
        {  
            path: "sustainability",
            children:[
                {  
                    path: "esg",
                    element: <Esg />
                }
            ]            
        },
        {  
            path: "energy",
            children:[
                {  
                    path: "lowCarbonLng",
                    element: <LowCarbonLng />
                },
                {  
                    path: "renewable",
                    element: <Renewable />
                }
            ]            
        },
        {  
            path: "recruit",
            children:[
                {  
                    path: "welfare",
                    element: <Welfare />
                },
                {  
                    path: "cultivation",
                    element: <Cultivation />
                }
            ]            
        },        
        
    ]
  }
])

export default router