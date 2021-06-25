import Error from "../components/Error";

export default function Custom404() {
  return (
    <Error 
        title={"404"} 
        message={"Sorry this page could not be found"} 
        redirect={"/"}
        buttonMsg={"Back to Home"}    
    />
  )
}
