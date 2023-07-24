import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from "yup";
import "./form.css";
function CreateForm() {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert('Bạn đã khai báo y tế thành công!');
      };
    return (
        
        <>
            <h2>Tờ khai y tế</h2>
            <Formik
                initialValues={{
                    hoTen: "", email: "", namSinh: "", quocTich: "",
                    tinhThanh: "", quanHuyen: "", phuongXa: "", soNha: "", dienThoai: "",
                    hoChieu:"",
                }}
                validationSchema={yup.object({
                    hoTen: yup.string().required('tên không được để trống'),
                    email: yup.string().required('email không được để trống').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "địa chỉ email không hợp lệ"),
                    namSinh: yup.string().required('năm sinh không được để trống').matches(/^(19[0-9]{2}|[2-9][0-9]{3})+$/,"năm sinh phải lớn hơn 1900"),
                    quocTich: yup.string().required('quốc tịch không được để trống'),
                    tinhThanh: yup.string().required('tỉnh thành không được để trống'),
                    quanHuyen: yup.string().required('quân huyện không được để trống'),
                    phuongXa: yup.string().required('phường xã không được để trống'),
                    soNha: yup.string().required('số nhà không được để trống'),
                    dienThoai: yup.string().required('số điện thoại không được để trống'),
                    hoChieu: yup.string().required('số CMND/Hộ chiếu không được để trống'),
                })}
              
            >
                <form  onSubmit={handleSubmit}>
                    <div>
                        <lable htmlFor='hoTen'>Họ tên:</lable><br />
                        <Field id='hoTen' type='text' name='hoTen'></Field>
                        <ErrorMessage name="hoTen" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='hoChieu'>Số hộ chiếu/CMND:</lable><br />
                        <Field id='hoChieu' type='text' name='hoChieu'></Field>
                        <ErrorMessage name="hoChieu" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='namSinh'>Năm sinh:</lable><br />
                        <Field id='namSinh' type='text' name='namSinh'></Field>
                        <ErrorMessage name="namSinh" component="div" className='text-area' />
                    </div>

                    <br />
                    <div>
                        <label>Giới tính:</label>
                        <label htmlFor="male">
                            <Field type="checkbox" id="male" name="gender" value="male" />
                            Nam
                            <Field type="checkbox" id="male" name="gender" value="female" />
                            Nữ
                        </label>
                        <ErrorMessage name="quocgia" component="div" className='text-area' />
                    </div>
                    <br />

                    <div>
                        <lable htmlFor='quocgia'>Quốc tịch:</lable><br></br>
                        <Field type='text' name='quocgia'></Field>
                        <ErrorMessage name="quocgia" component="div" className='text-area' />
                    </div>
                    <br />
                    <br />
                    <div>
                        <lable htmlFor='congty'>Công ty làm việc:</lable><br></br>
                        <Field id="congty" type='text' name='congty'></Field>
                        <ErrorMessage name="congty" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <label>Có thẻ bảo hiểm y tế:</label>
                        <label htmlFor="yte">
                            <Field type="checkbox" id="yte" name="yte" value="male" />
                        </label>
                        <ErrorMessage name="yte" component="div" className='text-area' />
                    </div>
                    <br />
                    <h2>Địa chỉ liên lạc tại việt nam</h2>
                    <div>
                        <lable htmlFor='tinhThanh'>Tỉnh thành:</lable><br></br>
                        <Field id="tinhThanh" type='text' name='tinhThanh'></Field>
                        <ErrorMessage name="tinhThanh" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='quanHuyen'>Quận huyện:</lable><br></br>
                        <Field id="quanHuyen" type='text' name='quanHuyen'></Field>
                        <ErrorMessage name="quanHuyen" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='phuongXa'>Phường xã:</lable><br></br>
                        <Field id="phuongXa" type='text' name='phuongXa'></Field>
                        <ErrorMessage name="phuongXa" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='soNha'>Số nhà, phố, tổ dân phố/thôn/đội:</lable><br></br>
                        <Field id="soNha" type='text' name='soNha'></Field>
                        <ErrorMessage name="soNha" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='dienThoai'>Số điện thoại:</lable><br></br>
                        <Field id="dienThoai" type='text' name='dienThoai'></Field>
                        <ErrorMessage name="dienThoai" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='email'>Email:</lable><br></br>
                        <Field id="email" type='text' name='email'></Field>
                        <ErrorMessage name="email" component="div" className='text-area' />
                    </div>
                    <br />
                    <h2>Trong vòng 14 ngày qua, Anh/Chị </h2>
                    <h2> có đến quốc gia/vùng lãnh thổ</h2>
                    <h2>  nào(có thể đi qua nhiều quốc gia)</h2>
                    <div>
                        <lable htmlFor='quocGia'></lable><br></br>
                        <textarea id="quocGia" type='text' name='quocGia'></textarea>
                        <ErrorMessage name="quocGia" component="div" className='text-area' />
                    </div>
                    <br />
                    <h2>Trong vòng 14 ngày qua, Anh/Chị </h2>
                    <h2>có thấy xuất hiện dấu hiệu nào</h2>
                    <h2>sau đây không?</h2>
                    <div>
                        <label htmlFor="sot">
                            <Field type="checkbox" id="sot" name="sot" />
                            Sốt
                        </label>
                    </div>
                    <div>
                        <label htmlFor="ho">
                            <Field type="checkbox" id="ho" name="ho" />
                            Ho
                        </label>

                    </div>
                    <div>
                        <label htmlFor="khoTho">
                            <Field type="checkbox" id="khoTho" name="khoTho" />
                            Khó thở
                        </label>
                    </div>
                    <div>
                        <label htmlFor="viemPhoi">
                            <Field type="checkbox" id="viemPhoi" name="viemPhoi" />
                            Viêm phổi
                        </label>

                    </div>
                    <div>
                        <label htmlFor="dauHong">
                            <Field type="checkbox" id="dauHong" name="dauHong" />
                            Đau họng
                        </label>
                    </div>
                    <div>
                        <label htmlFor="metMoi">
                            <Field type="checkbox" id="metMoi" name="metMoi" />
                            mệt mỏi
                        </label>

                    </div>
                    <h2>Trong vòng 14 ngày qua, Anh/Chị </h2>
                    <h2>có tiếp súc với?</h2>
                    <div>
                        <label htmlFor="nguoiBenh" >
                            <Field type="checkbox" id="nguoiBenh" name="nguoiBenh" />
                            Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                        </label>

                    </div>
                    <div>
                        <label htmlFor="nuocBenh">
                            <Field type="checkbox" id="nuocBenh" name="nuocBenh" />
                            Người từ nước có bệnh COVID-19
                        </label>
                    </div>
                    <div>
                        <label htmlFor="bieuHien">
                            <Field type="checkbox" id="bieuHien" name="bieuHien" />
                            Người có biểu hiện(Sốt, ho, khó thở, viêm phổi)
                        </label>

                    </div>
                    <br />
                    <div>
                        <button type="submit">Create</button>
                    </div>
                </form>
            </Formik>
        </>
    )
}
export default CreateForm;