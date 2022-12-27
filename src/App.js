import './App.css';
import {MdComputer, MdPeopleAlt, MdOutlineRemoveCircleOutline} from "react-icons/md";
import {FiFlag} from "react-icons/fi";
import {RxCounterClockwiseClock} from "react-icons/rx";
import {FaBug, FaRegMoneyBillAlt} from "react-icons/fa";
import {TbCircles} from "react-icons/tb";



function App() {
  return (
    <div>
    <section className='section' style={{marginTop:"100px"}}>
        <div className="container" style={{}}>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{marginBottom:"60px"}}>
                <div className="text-center p-4">
                  <div className="mb-4" style={{fontSize:"35px"}}>
                  <MdComputer/>
                  </div>
                  <h4 className="mb-1" style={{fontSize:"30px"}}>
                  360° Visibility
                  </h4>
                  <p className="mb-0" style={{marginTop:"20px", fontSize:"23px"}}>Lorem ipsum dolor sit amet consectetur. Tellus tempor sit amet  elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{marginBottom:"60px"}}>
                <div className="text-center p-4">
                  <div className="mb-4" style={{fontSize:"35px"}}>
                  <TbCircles/>
                  </div>
                  <h4 className="mb-1" style={{fontSize:"30px"}}>
                  AI Driven Detection
                  </h4>
                  <p className="mb-0" style={{marginTop:"20px", fontSize:"23px"}}>Lorem ipsum dolor sit amet consectetur. Tellus tempor sit amet elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{marginBottom:"60px"}}>
                <div className="text-center p-4">
                  <div className="mb-4" style={{fontSize:"35px"}}>
                  <FaBug/>
                  </div>
                  <h4 className="mb-1" style={{fontSize:"30px"}}>
                  Threat Hunting
                  </h4>
                  <p className="mb-0" style={{marginTop:"20px", fontSize:"23px"}}>Lorem ipsum dolor sit amet consectetur. Tellus tempor sit amet  elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{marginBottom:"60px"}}>
                <div className="text-center p-4">
                  <div className="mb-4" style={{fontSize:"35px"}}>
                  <MdOutlineRemoveCircleOutline/> 
                  </div>
                  <h4 className="mb-1" style={{fontSize:"25px"}}>
                  False Positive Elimination
                  </h4>
                  <p className="mb-0" style={{marginTop:"20px", fontSize:"24px"}}>Lorem ipsum dolor sit amet consectetur. Tellus tempor sit amet elit.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-lg-3 col-sm-6">
              <div className="card" style={{marginBottom:"60px"}}>
                <div className="text-center p-4">
                  <div className="mb-4" style={{fontSize:"35px"}}>
                  <FiFlag/>
                  </div>
                  <h4 className="mb-1" style={{fontSize:"30px"}}>
                  Advenced API
                  </h4>
                  <p className="mb-0" style={{marginTop:"20px", fontSize:"23px"}}>Lorem ipsum dolor sit amet consectetur. Tristique tellus tempor ipsum dolor elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{marginBottom:"60px"}}>
                <div className="text-center p-4">
                  <div className="mb-4" style={{fontSize:"35px"}}>
                  <MdPeopleAlt/>
                  </div>
                  <h4 className="mb-1" style={{fontSize:"30px"}}>
                  Ask an Analyst
                  </h4>
                  <p className="mb-0" style={{marginTop:"20px", fontSize:"23px"}}>Lorem ipsum dolor sit amet consectetur. Tristique adipiscing ipsum dolor elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{marginBottom:"60px"}}>
                <div className="text-center p-4">
                  <div className="mb-4" style={{fontSize:"35px"}}>
                  <FaRegMoneyBillAlt/> 
                  </div>
                  <h4 className="mb-1" style={{fontSize:"30px"}}>
                  Cost Effective
                  </h4>
                  <p className="mb-0" style={{marginTop:"20px", fontSize:"23px"}}>Lorem ipsum dolor sit amet consectetur. Tristique adipiscing tellus tempor elit.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="card" style={{marginBottom:"60px"}}>
                <div className="text-center p-4">
                  <div className="mb-4" style={{fontSize:"35px"}}>
                  <RxCounterClockwiseClock/> 
                  </div>
                  <h4 className="mb-1" style={{fontSize:"29px"}}>
                  Start Using Right Now
                  </h4>
                  <p className="mb-0" style={{marginTop:"20px", fontSize:"23px"}}>Lorem ipsum dolor sit amet consectetur. Tristique adipiscing elit.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
