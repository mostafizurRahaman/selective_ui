import React, { useState } from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css' 
const Home = () => {
   const [selectedItems , setSeletedItems] = useState([]); 
    const handleForm = (event) => {
      event.preventDefault(); 
    } 
   const data  = {
      label: "Select All", 
      value:"Select All", 
      children:[
         { 
            label: 'Manufacturing', 
            value: "Manufacturing", 
            children: [
               {
                  label: 'Construction materials', 
                  value:"Construction materials"
               }, 
               {
                  label: "Electronics Materials", 
                  value: 'Electronics Materials'
               }, 
               {
                  label: "Food and Beverage", 
                  value: "Food and Beverage", 
                  children: [
                     {
                        label: 'Bakery & confectionery products',
                        value: "Bakery & confectionery products"
                     }, 
                     {
                        label: 'Beverages', 
                        value: "Beverages"
                     }, 
                     {
                        label: "Fish & fish products", 
                        value: "Fish & fish products", 
                     }, 
                     {
                        label: "Meat & meat products", 
                        value: "Meat & meat products"
                     }, 
                    {
                     label: "Milk & dairy products", 
                     value: "Milk & dairy products "
                    }, 
                    {
                     label: "Other", 
                     value: "Other"
                    }, 
                    {
                     label: "Sweets & snack food", 
                     value: "Sweets & snack food"
                    }
                  ]
               },
               {
                  label: "Furniture", 
                  value: "Furniture", 
                  children: [
                     {
                        label: "Bathroom/sauna",
                        value: "Bathroom/sauna" 
      
                     }, 
                     {
                        label: "Bedroom", 
                        value: "Children's Room"
                     }, 
                     {
                        label: "Kitchen", 
                        value: "Kitchen"
                     }, 
                     {
                        label: "Living room",
                        value: "Living room" 
                        
                     }, 
                     {
                        label: "Office", 
                        value: "Office", 
                     }, 
                     {
                        label: "Other(Furniture)", 
                        value: "Other(Furniture)", 
                     }, 
                     {
                     label : "Outdoor", 
                     value: "Outdoor", 
                     }, 
                     {
                        label: "Project Furniture", 
                        value: "Project Furniture", 
                     }, 
      
                  ]
               }, 
               {
                  label: "Machinery", 
                  value: "Machinery", 
                  children: [
                     {
                        label: "Machinery Components", 
                        value: "Machinery Components"
                     }, 
                     {
                        label:"Machinery equipment/tools", 
                        value: "Machinery equipment/tools"
                     }, 
                     {
                        label:"Manufacture of machinery", 
                        value: "Manufacture of machinery"
                     }, 
                     {
                        label: "Maritime", 
                        value: "Maritime", 
                        children: [
                           {
                              label: 'Aluminium and steel workboats', 
                              value: "Aluminium and workboats"
                           }, 
                           {
                              label: "Boat/Yacht building", 
                              value: "Boat/Yacht building", 
                           }, 
                           {
                              label: "Ship repair and conversion", 
                              value: "", 
                           }
      
                        ]
                     }, 
                     {
                        label:"Metal Structure", 
                        value: "Maritime", 
                     }, 
                     {
                        label:"Other", 
                        value: "Other", 
                     }, 
                     {
                        label:"Repair and maintenance service", 
                        value: "Repair and maintenance service"
                     }
                  ], 
               }, 
               {
                  label: "Metalworking", 
                  value:"Metalworking",
                  children:[
                        {
                           label: "Construction of metal structures", 
                           value:"Construction of metal structures"
                        }, 
                        {
                           label:"Houses and buildings", 
                           value:"Houses and buildings", 
                        }, 
                        {
                           label:"Metal Products", value: "Metal Products", 
                        }, 
                        {
                           label: "Metal Works", 
                           value: "Metal Works",
                           children: [
                              {
                                 label:"CNC-machining", 
                                 value:"CNC-machining"
                              }, 
                              {
                                 label:"Forgings, Fasteners", 
                                 value:"Forgings, Fasteners"
                              }, 
                              {
                                 label:"Gas, Plasma, Laser Cutting", 
                                 value:"Gas, Plasma, Laser Cutting"
                              }, 
                              {
                                 label:"MIG, TIG, Aluminum Welding", 
                                 value:"MIG, TIG, ALuminum Welding", 
                              }
                           ] 
                        }, 
                        
                  ],  
               }, 
               {
                  label:"Plastic and Rubber", 
                  value:"Plastic and rubber ", 
                  children:[
                     {
                        label:"Packaging", 
                        value:"Packaging"
                     }, 
                     {
                        label:"Plastic goods", 
                        value:"Plastic goods"
                     }, 
                     {
                        label:"Plastic processing technology", 
                        value:'Plastic processing technology', 
                        children:[
                           {
                              label:"Blowing", 
                              value:"Blowing"
                           }, 
                           {
                              label:"Moulding", 
                              value:"Moulding"
                           }, 
                           {
                              label:"Plastic welding and processing", 
                              value:"Plastic welding and processing"
                           }, 
                        ]
                     }, 
                     {
                        label:"Plastic Profiles", 
                        value:"Plastic Profiles"
                     }, 
      
                  ]
               }, 
               {
                  label:"Printing", 
                  value:"Printing", 
                  children:[
                     {
                        label:'Advertising', 
                        value:"Advertising", 
                     }, 
                     {
                        label:"Book/Periodicals", 
                        value:" Book/Periodicals", 
                     }, 
                     {
                        label:"Labelling and packaging printing", 
                        value:"Labeling and packaging printing", 
                     }, 
                     
                  ]
               }, 
               {
                  label:"Textile and Clothing", 
                  value:"Textile and Clothing" , 
                  children:[
                     {
                        label: "Clothing", 
                        value:"Clothing"
                     }, 
                     {
                        label:"Textile", 
                        value:"Textile"
                     }
                  ], 
               }, 
               {
                  label:"Wood",
                  value:"Wood", 
                  children:[
                     {
                        label:"Other(Wood)", 
                        value:"Other(Wood)"
                     }, 
                     {
                        label:"Wooden building materials", 
                        value:"Wooden Building materials"
                     }, 
                     {
                        label:"Wooden Houses", 
                        value:"Wooden Houses"
                     }
                  ]
               }
               
               
      
               
            ]
         }, 
         {
            label:"Other",
            value:"Other", 
            children:[
              {
               label:"Creative Industries", 
               value:"Creative Industries",            
              }, 
              {
               label:'Energy Technology',
                value:"Energy Technology"
              }, 
              {
               label:"Environment", 
               value:"Environment"
              }
            ]
         }, 
         {
            label:"Service", 
            value:"Service", 
            children:[
               {
                  label:"Business Services", 
                  value:"Business Services", 
               }, 
               {
                  label:"Engineering", 
                  value:"Engineering", 
               }, 
               {
                  label:"Information Technology and Telecommunication",
                  value:"Information Technology and Telecommunication", 
                   children:[
                     {
                        label:"Data processing, Web Portals, E-marketing", 
                        value:"Data Processing, Web Portals, E-marketing"
                     }, 
                     {
                        label:"Programming Consultancy", 
                        value: "Programming Consultancy"
                     }, 
                     {
                        label:"Software, Hardware", 
                        value:"Software, Hardware"
                     }, 
                     {
                        label:"Telecommunications", 
                        value:"Telecommunications"
                     }
                   ]
               }, 
               {
                  label:"Tourism", 
                  value:""
               }, 
               {
                  label:"translation services", 
                  value:'translation services'
               }, 
               {
                  label:"Transport and Logistics",
                  value:"Transports and Logistics", 
                  children:[
                     {
                        label:'Air', 
                        value:"Air", 
                     }, 
                     {
                        label:"Rail", 
                        value:"Rail"
                     }, 
                     {
                        label:"Road", 
                        value:"Road"
                     }, 
                     {
                        label:"Water", 
                        value:"Water"
                     }
                  ]

               }

            ]
         }
      ]
   }

   
   const onChange = (currentNode, selectedNodes) => {
      const newArray = selectedNodes.map(select => select.value); 
      // setSeletedItems(newArray); 
      console.log(newArray); 
    }

    console.log(selectedItems); 

   return (
      <div>
         <form  onSubmit={handleForm}>
               <div>
                  <label htmlFor="name">Register</label>
                   <input type="text" placeholder='Enter your name' id="name" name="full_name" required />
               </div>
               <div>
                    <DropdownTreeSelect data={data}  onChange={onChange}></DropdownTreeSelect>
               </div>
            
         </form>
      </div>
   );
};

export default Home;