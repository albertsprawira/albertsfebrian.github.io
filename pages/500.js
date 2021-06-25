import Error from "../components/Error";

export default function Custom500() {
  return (
    <Error 
        title={"500"} 
        message={"Internal Server Error"} 
        redirect={"/"}
        buttonMsg={"Back to Home"}    
    />
  )
}
