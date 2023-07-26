import styled from "styled-components"
import { productData } from "../../utils/constans"
import { useContext } from "react"
import { TodosContext } from "../TodoContext"
const TableProduct =()=>{
    
    const {storeProduct,incrementFunction,decrementFunction,removeTodoFunction}=useContext(TodosContext)

    const totalPrice= storeProduct.map((item)=>{
        if(item.quantity===0){
            const result={...item,price:(item.price=0)}
            return result.price
        }else {
    console.log(item.price, 'loh');

            return item.price
        }
    })
    console.log(totalPrice);
    const resulTotalPraice=totalPrice.reduce((a,b)=>a+b,0)
console.log(resulTotalPraice);
    return(
        <Container>
           <div>
            <Table>
                <Thead>
                    <p className="id">#</p>
                    <p>product</p>
                    <p>productName</p>
                    <p>price</p>
                    <p>Quantity</p>
                    <p>remove</p>
                </Thead>
                <ol>
                {storeProduct.map((item,index)=>{
                 return  ( item.quantity !== 0 && (
                    <li>
                    <Tbody key={item.id}>
                              <p>{index+1}</p>
                        <Iimg>
                              <img src={item.url} />
                        </Iimg>
                            <div> {item.productName} </div>
                            <div>${item.price}</div>
                            <ConteinerCount>
                                <ButtonCount onClick={()=>decrementFunction(item.id)}>-</ButtonCount>
                                <p>{item.quantity}</p>
                                <ButtonCount onClick={()=>incrementFunction(item.id)}>+</ButtonCount>
                            </ConteinerCount>
                            <div>
                                <ButtonRemove onClick={()=>removeTodoFunction(item.id)}>Remove</ButtonRemove>
                            </div>
                    </Tbody>
                    </li>
                    )
              )})}
              </ol>
            </Table>
            <div style={{marginBottom:"40px"}}>
                <p style={{fontSize:'3rem'}}>TOTAL:{resulTotalPraice}</p>
            </div>
           </div>
        </Container>
    )
}


export default TableProduct
const Container=styled.div`
margin-top:20px 0px;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 20px;
`
const Table=styled.div`
    display: flex;
    flex-direction:column;

`
const Thead=styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 70px;
    font-size: 1.6rem;
    font-weight:600;
    border-top:1px solid;

    
    .id{
        width: 100px;
        display: flex;
        justify-content:center;
        /* margin-top:20px */
    }

   p{
    width:200px;
    height: 20px;
    display: flex;
    justify-content:center;
    margin-top:-10px
   }
`
const Tbody=styled.div`
       display: flex;
    justify-content:center;
    align-items: center;
    font-size: 1.6rem;
    border-top:1px solid;

    
    .id{
        width: 100px;
        display: flex;
        justify-content:center;
      
    }

   div{
    width:240px;
    display: flex;
    justify-content:center;
   }
`
const Iimg=styled.div`
     width: 100px;
     height: 100px;
img{
    width: 50%;
    height: 100%;
    border-radius:8px;
    object-fit: cover;

}
`
const ConteinerCount=styled.div`
    display: flex;
    gap: 10px;
`


const ButtonCount=styled.button`height: 50px;
    padding: 10px;
    background-color: #ff7200;
    color: #fff;
    border-radius:4px;
    border:none;
margin-top:20px;
`
const ButtonRemove=styled.button`
width: 120px;
height: 45  px;
       padding: 10px;
    background-color: palevioletred;
    color: #fff;
    border-radius:4px;
    border:none;
    font-size:20px
`