import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NecessaryInfo = () => {
    return (
        <div>
            <div className="text-center pb-5">
            <h1 className="heading-text fs-1 pt-3 fw-bold">Traveling around Bangladesh</h1>
            <h4>All the necessary information for your trip around Bangladesh is here.</h4>
            </div>
           

          <div className="container">
          <Row className="">
                <div className="col-md-4">
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fas fs-3 fa-hospital-symbol heading-text  fw-bold-"></i>
                        <h4 className="ps-3"> Health</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fas fa-lock heading-text fs-3 fw-bold"></i>
                        <h4 className="ps-3">Security</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fs-3 fas fa-file-alt heading-text  fw-bold-"></i>
                        <h4 className="ps-3">Visas and Travel Papers</h4>
                    </div>
                    <hr />
                   </div>
                </div>
                <div className="col-md-4">
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fas fs-3 fa-phone heading-text  fw-bold-"></i>
                        <h4 className="ps-3">Emergency Numbers</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fas fs-3 fa-bolt heading-text  fw-bold-"></i>
                        <h4 className="ps-3">Power</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fas fs-3 fa-cloud-sun  fw-bold"></i>
                        <h4 className="ps-3">Local Weather</h4>
                    </div>
                    <hr />
                   </div>
                </div>
                <div className="col-md-4">
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fas fs-3 fa-mobile-alt heading-text  fw-bold"></i>
                        <h4 className="ps-3">Area Codes</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fas fs-3 fa-language heading-text  fw-bold"></i>
                        <h4 className="ps-3">Language</h4>
                    </div>
                    <hr />
                   </div>
                   <div>
                   <div className="necessary-link d-flex">
                    <i class="fas fs-3 fa-coins heading-text  fw-bold"></i>
                        <h4 className="ps-3">Currency</h4>
                    </div>
                    <hr />
                   </div>
                </div>
               
               
            </Row>
          </div>
        </div>
    );
};

export default NecessaryInfo;