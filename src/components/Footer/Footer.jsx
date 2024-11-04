

const Footer = () => {
    return (
       
            <footer className=" text-[#09080F] my-40 ">
                
                    <h3 className="font-bold text-3xl text-center">Gadget Heaven</h3>
                    <p className="font-semibold opacity-60 text-center">Leading the way in cutting-edge technology and innovation.</p>
                <hr className="my-6" />

                
              <div className="w-11/12 md:w-9/12 lg:w-7/12 justify-between md:text-center mx-auto md:flex ">
              <nav>
    <h6 className=" text-xl font-bold  ">Services</h6>
   
   <p className="opacity-60"> Product Support</p>
    <p className="opacity-60">Order Tracking</p>
    <p className="opacity-60">Shipping & Delivery</p>
    <p className="opacity-60">Returnst</p>
   
   
  </nav>
  <nav>
    <h6 className="  text-xl font-bold text-[#09080F]">Company</h6>
    <p className="opacity-60"> About Us</p>
    <p className="opacity-60">Careers</p>
    <p className="opacity-60">Contact</p>
   
   


  </nav>
  <nav>
    <h6 className="  text-xl font-bold text-[#09080F]">Legal</h6>
  
  <p className="opacity-60"> About Us</p>
    <p className="opacity-60">Careers</p>
    <p className="opacity-60">Contact</p>
   

  </nav>
              </div>
</footer>
        
    );
};

export default Footer;