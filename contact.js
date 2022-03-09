import DefaultLayout from "../components/DefaultLayout";
function contact(){
    return(
        <DefaultLayout>
            <h1 style={{color:"green"}}>CONTACT US</h1>
            <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Subedari</div>
          <div class="text-two">Hanamkonda</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">9059778173</div>
          <div class="text-two">8074529359</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">tarun123@gmail.com</div>
          <div class="text-two">aditya@gmail.com</div>
        </div>
      </div>
    </div>
  </div>
 
        </DefaultLayout>
    )
}

   
export default contact;