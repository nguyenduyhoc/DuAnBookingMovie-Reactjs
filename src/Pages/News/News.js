import React from 'react'

export default function News() {
    return (
        <div id="news" className="container">
            <div id="homeCinemaHeadBackground">
                <img src="./img/Movie/back-news.png" alt />
            </div>
            <div>
                <ul class="nav nav-pills mb-3 justify-content-center mt-5" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link tabPanel active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link tabPanel" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Review</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link tabPanel" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Promotion</a>
                    </li>
                </ul>
                <div class="tab-content imgNews" id="pills-tabContent">
                    <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/hinhQuangCao1.jpg" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>

                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/hinhQuangCao2.jpg" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao3.png" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div  className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2 "> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao4.png" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="stepImg col-4">
                                <div className=" stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho1.png" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho2.png" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho3.jpg" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho4.jpg" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row">
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao5.jpg" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>

                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao6.jpg" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao7.png" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao8.png" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="stepImg col-4">
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho9.png" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho8.jpg" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho11.jpg" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho12.png" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row">
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/hinhQuangCao3.jpg" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>

                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/hinhQuangCao4.jpg" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao9.jpg" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao10.png" alt="quangCao" />
                                <a href="#">Tiêu đề</a>
                                <p>Nội dung</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="stepImg col-4">
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho2.png" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho7.png" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho6.png" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho5.jpg" alt="quangCao" />
                                    <a href="#">Nội dung</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="btn btn-secondary "> More</div>
            </div>

        </div>
    )
}
