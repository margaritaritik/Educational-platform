
import React, {useState ,useEffect} from "react";
import {API} from "../servises/api";
import styles from '../Components/Footer/footer.module.css'
const TestAPI = () => {

    const BASE_URL='http://localhost:8082';
    const [items, setItems]=useState();
    const [data2, setData2]=useState();
    
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
   
    useEffect(() => {
        
        const userRequest = async () => {
           
            setResult("");
            setError("");
            try {
                
                const result=await API.user.getCurrentUser();
                setItems(result);
                let effects:{id:number,code: string,name: string,classroom_teacher:{CreatedAt:string,UpdatedAt: string,DeletedAt: Boolean,
                    ID: number,
                    Name: string,
                    Email: string,
                    Age: number,
                    Birthday: Date,
                    Role: Number}}[]=result;
                    console.log(effects);  
                    setData2(effects.map(item => 
                        `<tr key=${item.id}>
                          <td>${item.id}</td>
                          <td>${item.name}</td>
                          <td>
                            <input
                              type="checkbox"
                              checked=0
                              onChange={() => handleCheckboxChange(${item.id})}
                            />
                          </td>
                        </tr>`
                    ));
               
              
                          
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }

            
        };
        userRequest();

    }, []);

    const ClickFavoriteTrue=()=>{
        
        // const result=await API.user.getCurrentUser();
        // setItems(result)
        console.log(data2);
       
    //     const ListData = data2.map(item => 
    //         `<tr key=${item.id}>
    //           <td>${item.id}</td>
    //           <td>${item.name}</td>
    //           <td>
    //             <input
    //               type="checkbox"
    //               checked=${item.selected}
    //               onChange={() => handleCheckboxChange(${item.id})}
    //             />
    //           </td>
    //         </tr>`
    //     );
    // setData2(ListData);
    }


    
    
  
  const initialData = [
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ];

  const [data, setData] = useState(initialData);

  const handleCheckboxChange = (id) => {
    setData(data.map(item =>
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const handleButtonClick = () => {
    // Здесь вы можете выполнить действия с выбранными строками, например, изменить их значения
    const selectedItems = data.filter(item => item.selected);
    console.log("Выбранные элементы:", selectedItems);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={ClickFavoriteTrue}>Изменить выбранные элементы</button>
   
  
    </div>
  );
};

export default TestAPI;
