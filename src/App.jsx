import React, { useState } from 'react';
import { Button, InputNumber, Form, Select, Card, Row, Col, DatePicker, Result, Collapse, Modal } from 'antd';
import imgCT from './assets/CT.png'
const App = () => {
  const [resultValue, setResult] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const { airconditioningtypeid, bathroomcnt, bedroomcnt, buildingqualitytypeid, calculatedbathnbr, decktypeid, finishedfloor1squarefeet, finishedsquarefeet50, fips, fireplacecnt, fullbathcnt, heatingorsystemtypeid, poolcnt, poolsizesum, pooltypeid2, pooltypeid7, propertylandusetypeid, regionidcity, regionidcounty, regionidzip, roomcnt, unitcnt, yardbuildingsqft17, yardbuildingsqft26, numberofstories, assessmentyear, years_life, lotsizesquarefeet, finishedsquarefeet15, calculatedfinishedsquarefeet, transactiondate, garagetotalsqft, garagecarcnt } = values
    let year = transactiondate.$y
    let month = transactiondate.$M
    let day = transactiondate.$D
    let weekday = transactiondate.$W
    console.log({ calculatedbathnbr, decktypeid, finishedfloor1squarefeet, finishedsquarefeet50, fips, fireplacecnt, fullbathcnt, heatingorsystemtypeid, poolcnt, poolsizesum, pooltypeid2, pooltypeid7, propertylandusetypeid, regionidcity, regionidcounty, regionidzip, roomcnt, unitcnt, yardbuildingsqft17, yardbuildingsqft26, numberofstories, assessmentyear, years_life, lotsizesquarefeet, finishedsquarefeet15, calculatedfinishedsquarefeet, transactiondate, garagetotalsqft, garagecarcnt, year, month, day, weekday })
    let result = ((10711805 * (5.92589990836649e-10)) + (airconditioningtypeid * 0.00030959258858300436) + (buildingqualitytypeid * -0.0013979304675816842) + (calculatedbathnbr * 0.00959327925414344) + (decktypeid * -0.004915588132008522) + (finishedfloor1squarefeet * -2.5234989421292046e-7) + (finishedsquarefeet50 * -0.0000029679374565022227) + (fips * 0.004953611843684178) + (fireplacecnt * 0.005140554022968948) + (fullbathcnt * -0.010026373466616363) + (heatingorsystemtypeid * -0.0005727906617628472) + (poolcnt * 0.16733536399588309) + (poolsizesum * -0.000011541712032987027) + (pooltypeid2 * -0.17998081166078497) + (pooltypeid7 * -0.16961708738679585) + (propertylandusetypeid * 0.00020789190377822658) + (6.0378003242004E7 * (-5.030205611099458e-7)) + (regionidcity * 5.3318211381812635e-9) + (regionidcounty * 7.487526553893955e-7) + (regionidzip * -1.5436069613047616e-7) + (roomcnt * -0.000025149410682586855) + (unitcnt * -0.0009234749924402094) + (yardbuildingsqft17 * -0.0000155542927909738) + (yardbuildingsqft26 * -0.000023467135231524303) + (numberofstories * -0.0019152035810943446) + (assessmentyear * 0.11758701392602122) + (years_life * -0.00003706948863911915) + ((calculatedfinishedsquarefeet / lotsizesquarefeet) * -0.0046917550298117205) + ((calculatedfinishedsquarefeet / finishedsquarefeet15) * 0.00675642241301217) + ((bathroomcnt * bedroomcnt) * 0.0010687517650488552) + ((calculatedfinishedsquarefeet / roomcnt) * 0.00002014759486573295) + ((garagetotalsqft / garagecarcnt) * 0.00001985428465536769) + (year * -0.11076586083565505) + (month * 0.0003435471109880675) + (day * -0.00005124323731896916) + (weekday * 0.000011992206781798274) - 13.20713100384418)
    setResult(result)
    setIsModalOpen(true)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);

  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (<Card style={{ boxShadow: '1px 0px 8px 2px #ccc' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Nhập thông tin để dự đoán giá nhà</h1>
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 25 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <Form.Item
            label="Ngày giao dịch"
            name="transactiondate"
            rules={[{ required: true, message: 'Vui lòng nhập ngày giao dịch!' }]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Mã loại điều hòa"
            name="airconditioningtypeid"
            rules={[{ required: true, message: 'Vui lòng nhập mã loại điều hòa!' }]}
          >
            <Select options={[
              {
                label: '1',
                value: 1
              },
              {
                label: 3,
                value: 3
              },
              {
                label: 5,
                value: 5
              },
              {
                label: 9,
                value: 9
              },
              {
                label: 11,
                value: 11
              },
              {
                label: 13,
                value: 13
              },
            ]} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Số lượng phòng tắm"
            name="bathroomcnt"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng phòng tắm!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Số lượng phòng ngủ"
            name="bedroomcnt"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng phòng ngủ!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Mã chất lượng xây dựng"
            name="buildingqualitytypeid"
            rules={[{ required: true, message: 'Vui lòng nhập mã chất lượng xây dựng!' }]}
          >
            <Select options={[
              {
                label: 1,
                value: 1
              },
              {
                label: 2,
                value: 2
              },
              {
                label: 3,
                value: 3
              },
              {
                label: 4,
                value: 4
              },
              {
                label: 5,
                value: 5
              },
              {
                label: 6,
                value: 6
              },
              {
                label: 7,
                value: 7
              },
              {
                label: 8,
                value: 8
              },
              {
                label: 9,
                value: 9
              },
              {
                label: 10,
                value: 10
              },
              {
                label: 11,
                value: 11
              },
              {
                label: 12,
                value: 12
              },
            ]} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Số phòng tắm tính toán"
            name="calculatedbathnbr"
            rules={[{ required: true, message: 'Vui lòng nhập số phòng tắm tính toán!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Mã loại hình sân thượng."
            name="decktypeid"
            rules={[{ required: true, message: 'Vui lòng nhập mã loại hình sân thượng.!' }]}
          >
            <Select options={[
              {
                label: 1,
                value: 1
              },
              {
                label: 0,
                value: 0
              },

            ]} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diện tích sàn tầng một"
            name="finishedfloor1squarefeet"
            rules={[{ required: true, message: 'Vui lòng nhập diện tích sàn tầng một!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diện tích khu vực sinh hoạt"
            name="finishedsquarefeet50"
            rules={[{ required: true, message: 'Vui lòng nhập diện tích khu vực sinh hoạt!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Mã FIPS cho quận"
            name="fips"
            rules={[{ required: true, message: 'Vui lòng nhập mã FIPS!' }]}
          >
            <Select options={[
              {
                label: 6059,
                value: 6059
              },
              {
                label: 6037,
                value: 6037
              },
              {
                label: 6111,
                value: 6111
              }]}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Số lượng lò sưởi"
            name="fireplacecnt"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng lò sưởi!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Số lượng phòng tắm đầy đủ"
            name="fullbathcnt"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng phòng tắm đầy đủ!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Mã loại hệ thống sưởi hoặc làm mát"
            name="heatingorsystemtypeid"
            rules={[{ required: true, message: 'Vui lòng nhập mã hệ thống sưởi hoặc làm mát!' }]}
          >
            <Select options={[
              {
                label: 1,
                value: 1
              },
              {
                label: 13,
                value: 13
              },
              {
                label: 6,
                value: 6
              },
              {
                label: 20,
                value: 20
              },
              {
                label: 7,
                value: 7
              },
              {
                label: 24,
                value: 24
              },
              {
                label: 11,
                value: 11
              },
              {
                label: 14,
                value: 14
              },
              {
                label: 2,
                value: 2
              },
              {
                label: 18,
                value: 18
              },
              {
                label: 12,
                value: 12
              },
              {
                label: 10,
                value: 10
              },
            ]}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Số lượng hồ bơi"
            name="poolcnt"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng hồ bơi!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Tổng diện tích hồ bơi"
            name="poolsizesum"
            rules={[{ required: true, message: 'Vui lòng nhập tổng diện tích hồ bơi!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        {/* Dòng 1 */}
        <Col span={8}>
          <Form.Item
            label="Loại hình hồ bơi 1"
            name="pooltypeid2"
            rules={[{ required: true, message: 'Vui lòng nhập loại hình hồ bơi 1!' }]}
          >
            <Select options={[
              {
                label: 1,
                value: 1
              },
              {
                label: 0,
                value: 0
              },

            ]} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Loại hình hồ bơi 2"
            name="pooltypeid7"
            rules={[{ required: true, message: 'Vui lòng nhập loại hình hồ bơi 2!' }]}
          >
            <Select options={[
              {
                label: 1,
                value: 1
              },
              {
                label: 0,
                value: 0
              },

            ]} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Loại hình sử dụng đất đai"
            name="propertylandusetypeid"
            rules={[{ required: true, message: 'Vui lòng nhập loại hình sử dụng đất đai!' }]}
          >
            <Select options={[
              {
                label: 31,
                value: 31
              },
              {
                label: 246,
                value: 246
              },
              {
                label: 47,
                value: 47
              },
              {
                label: 266,
                value: 266
              },
              {
                label: 269,
                value: 269
              },
              {
                label: 263,
                value: 263
              },
              {
                label: 247,
                value: 247
              },
              {
                label: 264,
                value: 264
              },
              {
                label: 267,
                value: 267
              },
              {
                label: 261,
                value: 261
              },
              {
                label: 265,
                value: 265
              },
              {
                label: 260,
                value: 260
              },
              {
                label: 248,
                value: 248
              },
              {
                label: 275,
                value: 275
              },

            ]} />
          </Form.Item>
        </Col>
      </Row>

      {/* Dòng 2 */}
      <Row gutter={[32, 32]}>
        <Col span={8}>
        </Col>
        <Col span={8}>

        </Col>
        <Col span={8}>

        </Col>
      </Row>

      {/* Dòng 3 */}
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <Form.Item
            label="Mã số khu vực thành phố"
            name="regionidcity"
            rules={[{ required: true, message: 'Vui lòng nhập mã số khu vực thành phố!' }]}
          >
            <Select options={[
              {
                label: 37015,
                value: 37015
              },
              {
                label: 38980,
                value: 38980
              },
              {
                label: 54212,
                value: 54212
              },
              {
                label: 12292,
                value: 12292
              },
              {
                label: 21412,
                value: 21412
              },
              {
                label: 26965,
                value: 26965
              },
              {
                label: 10815,
                value: 10815
              },
              {
                label: 32923,
                value: 32923
              },
              {
                label: 34780,
                value: 34780
              },
              {
                label: 30399,
                value: 30399
              },
              {
                label: 45398,
                value: 45398
              },
              {
                label: 10241,
                value: 10241
              },
              {
                label: 40110,
                value: 40110
              },
              {
                label: 12447,
                value: 12447
              },
              {
                label: 30908,
                value: 30908
              },
              {
                label: 46314,
                value: 46314
              },
              {
                label: 45457,
                value: 45457
              },
              {
                label: 18875,
                value: 18875
              },
              {
                label: 51239,
                value: 51239
              },
              {
                label: 40009,
                value: 40009
              },
            ]} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Mã số khu vực quận"
            name="regionidcounty"
            rules={[{ required: true, message: 'Vui lòng nhập mã số khu vực quận!' }]}
          >
            <Select options={[
              {
                label: 1286,
                value: 1286
              },
              {
                label: 3101,
                value: 3101
              },
              {
                label: 2061,
                value: 2061
              }]}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Mã số khu vực mã bưu chính"
            name="regionidzip"
            rules={[{ required: true, message: 'Vui lòng nhập mã số khu vực mã bưu chính!' }]}
          >
            <Select options={[
              {
                label: 95994,
                value: 95994
              },
              {
                label: 96044,
                value: 96044
              },
              {
                label: 96488,
                value: 96488
              },
              {
                label: 96469,
                value: 96469
              },
              {
                label: 97004,
                value: 97004
              },
              {
                label: 96393,
                value: 96393
              },
              {
                label: 96415,
                value: 96415
              },
              {
                label: 97318,
                value: 97318
              },
              {
                label: 96978,
                value: 96978
              },
              {
                label: 97094,
                value: 97094
              },
              {
                label: 97109,
                value: 97109
              },
              {
                label: 96369,
                value: 96369
              },
              {
                label: 97016,
                value: 97016
              },
              {
                label: 96111,
                value: 96111
              },
              {
                label: 96212,
                value: 96212
              },
              {
                label: 96050,
                value: 96050
              },
              {
                label: 96087,
                value: 96087
              },
              {
                label: 96201,
                value: 96201
              },
              {
                label: 96954,
                value: 96954
              },
              {
                label: 96496,
                value: 96496
              },
            ]} />




















          </Form.Item>
        </Col>
      </Row>

      {/* Dòng 4 */}
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <Form.Item
            label="Số lượng phòng"
            name="roomcnt"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng phòng!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Số lượng đơn vị (căn hộ)"
            name="unitcnt"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng đơn vị (căn hộ)!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diện tích ở sân sau (loại 17)"
            name="yardbuildingsqft17"
            rules={[{ required: true, message: 'Vui lòng nhập diện tích ở sân sau (17)!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      {/* Dòng 5 */}
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <Form.Item
            label="Diện tích ở sân sau (Loại 26)"
            name="yardbuildingsqft26"
            rules={[{ required: true, message: 'Vui lòng nhập diện tích ở sân sau (26)!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Số lượng tầng"
            name="numberofstories"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng tầng!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Năm đánh giá"
            name="assessmentyear"
            rules={[{ required: true, message: 'Vui lòng nhập năm đánh giá!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      {/* Dòng 6 */}
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <Form.Item
            label="Tuổi bất động sản"
            name="years_life"
            rules={[{ required: true, message: 'Vui lòng nhập tuổi bất động sản!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diện tích đã hoàn thành"
            name="calculatedfinishedsquarefeet"
            rules={[{ required: true, message: 'Vui lòng nhập diện tích đã hoàn thành !' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Diện tích khu vực sinh hoạt"
            name="finishedsquarefeet15"
            rules={[{ required: true, message: 'Vui lòng nhập tổng diện tích khu vực sinh hoạt!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>

      </Row>
      {/* Dòng 7 */}
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <Form.Item
            label="Tổng diện tích"
            name="lotsizesquarefeet"
            rules={[{ required: true, message: 'Vui lòng nhập tổng diện tích !' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Số nhà để xe"
            name="garagecarcnt"
            rules={[{ required: true, message: 'Vui lòng nhập số nhà để xe!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Tổng diện tích nhà để xe"
            name="garagetotalsqft"
            rules={[{ required: true, message: 'Vui lòng nhập Tổng diện tích nhà để xe!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}>
          <Form.Item >
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Gửi
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
    <div style={{ maxWidth: '702px' }}>
      <Collapse defaultActiveKey={['1']} items={[{
        key: '1',
        label: 'Công thức',
        children: <div>
          <img src={imgCT} style={{ width: 600 }} />
        </div>,

      }, {
        key: '2',
        label: 'Áp dụng',
        children: <p>{`((parcelid * (5.92589990836649e-10)) + (airconditioningtypeid * 0.00030959258858300436) + (buildingqualitytypeid * -0.0013979304675816842) + (calculatedbathnbr * 0.00959327925414344) + (decktypeid * -0.004915588132008522) + (finishedfloor1squarefeet * -2.5234989421292046e-7) + (finishedsquarefeet50 * -0.0000029679374565022227) + (fips * 0.004953611843684178) + (fireplacecnt * 0.005140554022968948) + (fullbathcnt * -0.010026373466616363) + (heatingorsystemtypeid * -0.0005727906617628472) + (poolcnt * 0.16733536399588309) + (poolsizesum * -0.000011541712032987027) + (pooltypeid2 * -0.17998081166078497) + (pooltypeid7 * -0.16961708738679585) + (propertylandusetypeid * 0.00020789190377822658) + (rawcensustractandblock * (-5.030205611099458e-7)) + (regionidcity * 5.3318211381812635e-9) + (regionidcounty * 7.487526553893955e-7) + (regionidzip * -1.5436069613047616e-7) + (roomcnt * -0.000025149410682586855) + (unitcnt * -0.0009234749924402094) + (yardbuildingsqft17 * -0.0000155542927909738) + (yardbuildingsqft26 * -0.000023467135231524303) + (numberofstories * -0.0019152035810943446) + (assessmentyear * 0.11758701392602122) + (years_life * -0.00003706948863911915) + ((calculatedfinishedsquarefeet / lotsizesquarefeet) * -0.0046917550298117205) + ((calculatedfinishedsquarefeet / finishedsquarefeet15) * 0.00675642241301217) + ((bathroomcnt * bedroomcnt) * 0.0010687517650488552) + ((calculatedfinishedsquarefeet / roomcnt) * 0.00002014759486573295) + ((garagetotalsqft / garagecarcnt) * 0.00001985428465536769) + (year * -0.11076586083565505) + (month * 0.0003435471109880675) + (day * -0.00005124323731896916) + (weekday * 0.000011992206781798274) - 13.20713100384418)`}</p>,
      },]} />
    </div>
    <Modal title="Kết quả" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Result
        status="success"
        title={`Giá trị dự đoán là ${resultValue.toFixed(2) || 0.012}`}
      />
    </Modal>
  </Card>
  )
}
export default App;