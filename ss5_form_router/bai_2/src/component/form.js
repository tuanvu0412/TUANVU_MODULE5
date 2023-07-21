import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from "yup";

function CreateForm() {
    return (
        <>
            <h2>Contact Form</h2>
            <Formik
                initialValues={{
                    hoTen: "", email: "", namSinh: "", quocTich: "",
                    tinhThanh: "", quanHuyen: "", phuongXa: "", soNha: "", dienThoai: "",
                }}
                validationSchema={yup.object({
                    hoTen: yup.string().required(),
                    email: yup.string().required().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email address"),
                    namSinh: yup.string().required().min(1900),
                    quocTich: yup.string().required(),
                    tinhThanh: yup.string().required(),
                    quanHuyen: yup.string().required(),
                    phuongXa: yup.string().required(),
                    soNha: yup.string().required(),
                    dienThoai: yup.string().required(),

                })}
            >
                <form>
                    <div>
                        <lable htmlFor='hoTen'>Họ tên:</lable><br />
                        <Field id='hoTen' type='text' name='hoTen'></Field>
                        <ErrorMessage name="hoTen" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='email'>Số hộ chiếu/CMND:</lable><br />
                        <Field id='email' type='text' name='email'></Field>
                        <ErrorMessage name="email" component="div" className='text-area' />
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
                    <div>
                        <lable htmlFor='quocgia'>Quốc tịch:</lable><br></br>
                        <Field id="quocgia" type='text' name='quocgia'></Field>
                        <ErrorMessage name="quocgia" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <lable htmlFor='congty'>Công ty làm việc:</lable><br></br>
                        <Field id="congty" type='text' name='quocgia'></Field>
                        <ErrorMessage name="congty" component="div" className='text-area' />
                    </div>
                    <br />
                    <div>
                        <label>Có thẻ bảo hiểm y tế:</label>
                        <label htmlFor="yte">
                            <Field type="checkbox" id="yte" name="yte" value="male" />
                        </label>
                        <ErrorMessage name="quocgia" component="div" className='text-area' />
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