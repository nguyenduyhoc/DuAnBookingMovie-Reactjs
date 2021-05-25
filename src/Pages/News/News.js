import React from 'react'

export default function News() {
    return (
        <div id="news" className="container">
            <div id="homeCinemaHeadBackground">
                <img src="./img/Movie/back-news.png" alt="backgroundCinema" />
            </div>
            <div>
                <ul class="nav nav-pills mb-3 justify-content-center mt-5" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link tabPanel active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Tin tức</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link tabPanel" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Review</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link tabPanel" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Khuyến mãi</a>
                    </li>
                </ul>
                <div class="tab-content imgNews" id="pills-tabContent">
                    <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/hinhQuangCao1.jpg" alt="quangCao" />
                                <a href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"> Ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                <p>3 tỷ đồng đầu tư, 7 máy quay, 10 tàu bè thiết bị được đạo diễn Lý Hải huy động cho phân cảnh "Fast & Furious" kịch tính trên sông nước.</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>

                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/hinhQuangCao2.jpg" alt="quangCao" />
                                <a href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan">CINEMA 59K/VÉ CẢ TUẦN  !!! </a>
                                <p>Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao3.png" alt="quangCao" />
                                <a href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi">PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan</a>
                                <p>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                                <div  className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2 "> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao4.png" alt="quangCao" />
                                <a href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war">Review: Dinh Thự Oan Khuất (Ghost Of War)</a>
                                <p>Trong thời điểm nóng hổi vì dịch bệnh hiện nay, có rất ít phim bom tấn dám mạo hiểm ra mắt lúc này</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="stepImg col-4">
                                <div className=" stepContent m-2">
                                    <img style={{ width: '20%' }} src="./img/QuangCao/hinhNho1.png" alt="quangCao" />
                                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">Tổ hợp giải trí của giới Hà Thành</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '20%' }} src="./img/QuangCao/hinhNho2.png" alt="quangCao" />
                                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '20%' }} src="./img/QuangCao/hinhNho3.jpg" alt="quangCao" />
                                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '20%' }} src="./img/QuangCao/hinhNho4.jpg" alt="quangCao" />
                                    <a href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon">Beta Cineplex trở lại với hàng loạt ưu đãi lớn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row">
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao5.jpg" alt="quangCao" />
                                <a href="https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket">Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</a>
                                <p>Relic là bộ phim điện ảnh, kinh dị đầu tay của đạo diễn người Úc gốc Nhật Natalie Erika James. Phim có những cơn ác mộng vừa là điềm báo cho những điều sắp tới, vừa là những ký ức được</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>

                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao6.jpg" alt="quangCao" />
                                <a href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em"> DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM</a>
                                <p>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao7.png" alt="quangCao" />
                                <a href="https://tix.vn/review/7924-blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh">Nước lạnh để người Mỹ thức tỉnh</a>
                                <p>Xuyên suốt lịch sử nước Mỹ, cuộc nội chiến đẫm máu từ năm 1861 đến 1865 được coi là cột mốc đáng nhớ trong nỗ lực bãi bỏ chế độ nô lệ, đặc biệt là ở các bang miền Nam</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao8.png" alt="quangCao" />
                                <a href="https://tix.vn/review/7918-american-sniper-chinh-nghia-hay-phi-nghia">American Sniper - Chính nghĩa hay phi nghĩa?</a>
                                <p>American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="stepImg col-4">
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho9.png" alt="quangCao" />
                                    <a href="https://tix.vn/review/7894-review-spider-man-into-the-spider-vesre">Review: Spider-Man: Into The Spider-Vesre</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho8.jpg" alt="quangCao" />
                                    <a href="https://tix.vn/review/7881-review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant">[Review] Bloodshot </a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho11.jpg" alt="quangCao" />
                                    <a href="https://tix.vn/review/7882-review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the">[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho12.png" alt="quangCao" />
                                    <a href="https://tix.vn/review/7886-covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011">COVID-19 là bản chính thức của MEV-1</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row">
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/hinhQuangCao3.jpg" alt="quangCao" />
                                <a href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia"> KHUYẾN MÃI 1K/VÉ NGẠI CHI GIÁ VÉ</a>
                                <p>Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>

                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%' }} src="./img/QuangCao/hinhQuangCao4.jpg" alt="quangCao" />
                                <a href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan"> BHD 59K/VÉ CẢ TUẦN !!!</a>
                                <p>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.</p>
                                <div>
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao9.jpg" alt="quangCao" />
                                <a href="https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</a>
                                <p>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="col-4">
                                <img style={{ width: '100%' }} src="./img/QuangCao/quangCao10.png" alt="quangCao" />
                                <a href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</a>
                                <p>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.</p>
                                <div className="d-flex">
                                    <button className="btn"><i class="far fa-thumbs-up"></i> 0</button>
                                    <button className="btn ml-2"> <i class="far fa-comments"></i> 0</button>
                                </div>
                            </div>
                            <div className="stepImg col-4">
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho2.png" alt="quangCao" />
                                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">Khai trương rạp xịn giá ngon</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho7.png" alt="quangCao" />
                                    <a href="https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai">[123Phim] Thứ 6 Không Đen Tối </a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho6.png" alt="quangCao" />
                                    <a href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay">[123Phim] NHẬP MÃ 'PSM30K'</a>
                                </div>
                                <div className="stepContent m-2">
                                    <img style={{ width: '25%' }} src="./img/QuangCao/hinhNho5.jpg" alt="quangCao" />
                                    <a href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu">[Mega GS] Một đoá hoa thay ngàn lời yêu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="btn btn-secondary ">Xem thêm</div>
            </div>

        </div>
    )
}
