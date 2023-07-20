import React, { useEffect, useState } from "react";
import { getFlightsList } from "../../services/mkt-service/home-service";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const Flights = () => {
  const datePickerId = new Date().toISOString().slice(0, 10);
  const minDateValue = "1950-01-06";
  const [flightList, setFlightList] = useState();
  const [showList ,setShowList] =useState(false);

  useEffect(() => {
    // to get the flight list
    getFlightsList().then((res) => {
      setFlightList(res?.data);
    });
  }, []);

  const schema = yup
    .object({
      // trip_type: yup.string().required(),
    })
    .required();

  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      trip_type: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  const fromList = flightList?.map((item) => {
    return {
      value: item.from,
      label: item.from,
    };
  });

  const toList = flightList?.map((item) => {
    return {
      value: item.to,
      label: item.to,
    };
  });

  console.log("flightList", flightList);

  // const header = (
  //   <img
  //     alt="Card"
  //     src="https://www.airvistara.com/content/dam/airvistara/global/english/media-center/images/aircraft/low-res/5.jpg"
  //   />
  // );
  const footer = (
    <div className="card-footer-container">
      <div className="view-btn-container">
        <Button label="Details" icon="pi pi-eye" />
      </div>
      <div className="confirm-btn-container">
        <Button
          label="Confirm"
          icon="pi pi-times"
          className="p-button-outlined p-button-secondary"
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="flights-wrapper">
        <div className="form-wrapper">
          <div className="container-fluid form-container">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row pb-4">
                      <div className="col-md-12">
                        <div className="form-group trip-wrapper">
                          <div>
                            <label
                              className="form-label"
                              htmlFor="from_location"
                            >
                              Trip Type :
                            </label>
                          </div>
                          <div className="trip-select-box-wrapper">
                            <Controller
                              name="trip_type"
                              control={control}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  options={[
                                    { value: "one_way", label: "One Way" },
                                    { value: "return", label: "Return Also" },
                                  ]}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="form-label" htmlFor="from_location">
                            From
                          </label>
                          <Controller
                            name="from_location"
                            control={control}
                            render={({ field }) => (
                              <Select {...field} options={fromList} />
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="form-label" htmlFor="to_location">
                            To
                          </label>
                          <Controller
                            name="to_location"
                            control={control}
                            render={({ field }) => (
                              <Select {...field} options={toList} />
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label
                            className="form-label"
                            htmlFor="departure_date"
                          >
                            Departure Date
                          </label>

                          <input
                            type="date"
                            {...register("departure_date", {
                              required: true,
                            })}
                            max={datePickerId}
                            min={minDateValue}
                            autoComplete="new-password"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="form-label" htmlFor="arrival_data">
                            Arrival Date
                          </label>
                          <input
                            type="date"
                            {...register("arrival_data", {
                              required: true,
                            })}
                            max={datePickerId}
                            min={minDateValue}
                            autoComplete="new-password"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-btn-container">
                      <input
                        type="submit"
                        value="Search"
                        className="mt-5 submit_btn"
                        onClick={() => setShowList(true)}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------- form ends here */}

{showList &&        <div className="card-wrapper mt-4">
  <div className="row">
    <div className="col-md-6">
    <div className="row pb-4">
            {flightList &&
              flightList.map((item) => {
                return (
                  <div className="col-md-9" key={item.price}>
                    <div className="card flex justify-content-center p-0 m-2">
                      <Card
                        title={item.airlineName}
                        subTitle={item.price}
                        footer={footer}
                        // header={header}
                        className="md:w-25rem"
                      >
                        test
                      </Card>
                    </div>
                  </div>
                );
              })}
          </div>
    </div>
  </div>

        </div>}

        {/* -------------------------------------- card ends here */}
      </div>
    </>
  );
};

export default Flights;
