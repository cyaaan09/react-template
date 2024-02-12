import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Col } from "reactstrap";

// import images
import itsmLogo from "../../assets/images/itsm_logo_word.png";
import cictoLogo from "../../assets/images/itsm_logo.png";

const CarouselPage = () => {
  return (
    <React.Fragment>
      <Col xl={9}>
        <div className="auth-full-bg pt-lg-5 p-4">
          <div className="w-100">
            <div className="bg-overlay"></div>
            <div className="d-flex h-100 flex-column">
              <div className="p-4 mt-auto">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <h4 className="mb-3">
                        <img
                          src={cictoLogo}
                          alt=""
                          height="40"
                          className="auth-logo-light"
                        />
                        <span className="text-primary">Information Technology Service Management</span>

                      </h4>
                      <div dir="ltr">

                        <div>
                          <div className="item">
                            <div className="py-3">
                              <p className="font-size-16 mb-4">
                                Designed to provide functions, maintenance, and support of information technology devices, or services including but not limited to computer systems application development and maintenance; systems integration and interoperability; operating systems maintenance and design; computer systems programming; computer systems software support; planning and security relating to information technology devices; data management consultation; information technology education and consulting; information technology planning and standards; and establishment of local area network and workstation management standards.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  )
}
export default CarouselPage
