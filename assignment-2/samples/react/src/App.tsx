import React from "react";
import { useFormik } from "formik";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import "./App.css";

function App() {
  type Values = {
    name: string,
    email: string,
    zip: string,
    prefecture: string,
    address1: string,
    address2: string,
  }
  const allPrefectures = ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];

  const validate = React.useCallback((values: Values) => {
    const errors: {
      name?: string,
      email?: string,
      zip?: string,
      prefecture?: string,
      address1?: string,
      address2?: string,
    } = {};
  
    if (!values.name) {
      errors.name = "氏名を入力して下さい"
    }

    if (!values.email) {
      errors.email = "Eメールを入力してください"
    } else if (
      !/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
        values.email
      )
    ) {
      errors.email = "正しいメールアドレスを入力してください"
    }

    if (values.zip === "") {
      errors.zip = "郵便番号を入力してください"
    } else if (
      !/^[0-9]{7}$/.test(
        values.zip
      )
    ) {
      errors.zip = "ハイフンを含めず半角数字で入力してください"
    }

    if (values.prefecture === "*") {
      errors.prefecture = "都道府県を選択してください"
    }

    if (!values.address1) {
      errors.address1 = "市区町村・番地を入力してください"
    }

    return errors;
  }, []);

  const handleSubmit = React.useCallback(async (values: Values) => {
    try {
      const body = new FormData()
      Object.entries(values).forEach(([key, value]) => {
        body.append(key, value)
      })
      await fetch("https://httpstat.us/201", { method: "POST", body })
    } catch (error) {
      console.error(error)
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      zip: "",
      prefecture: "*",
      address1: "",
      address2: "",
    },
    validate,
    validateOnMount: true,
    onSubmit: handleSubmit,
  });

  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <table className="table">
        <tbody>
          <tr className="tr">
            <th className="th">氏名</th>
            <td>
              <TextField
                error={formik.touched.name && !!formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
                name="name"
                placeholder="(例)トレタ 太郎"
                size="small"
                value={formik.values.name}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    width: "230px",
                    height:"30px",
                    fontSize: "12px"
                  }
                }}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </td>
          </tr>

          <tr className="tr">
            <th className="th">Eメール</th>
            <td>
              <TextField
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                name="email"
                placeholder="(例)yoyaku@toreta.in"
                size="small"
                type="email"
                value={formik.values.email}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    width: "230px",
                    height:"30px",
                    fontSize: "12px"
                  }
                }}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </td>
          </tr>

          <tr className="tr">
            <th className="th">郵便番号</th>
            <td>
              <TextField
                error={formik.touched.zip && !!formik.errors.zip}
                helperText={formik.touched.zip && formik.errors.zip}
                name="zip"
                placeholder="(例)0000000"
                size="small"
                value={formik.values.zip}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    width: "100px",
                    height:"30px",
                    fontSize: "12px"
                  }
                }}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </td>
          </tr>

          <tr className="tr">
            <th className="th">都道府県</th>
            <td>
              <FormControl
                error={formik.touched.prefecture && !!formik.errors.prefecture}
                sx={{
                  "& .MuiInputBase-root": {
                    width: "230px",
                    height:"30px",
                    fontSize: "12px"
                  }
                }}
              >
                <Select
                  name="prefecture"
                  size="small"
                  value={formik.values.prefecture}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="*">
                    <span style={{ opacity:0.38 }}>選択してください</span>
                  </MenuItem>
                  {allPrefectures.map((p) => (
                    <MenuItem key={p} value={p}>{p}</MenuItem>
                  ))}
                </Select>
                {formik.touched.prefecture && (
                  <FormHelperText>{formik.errors.prefecture}</FormHelperText>
                )}
              </FormControl>
            </td>
          </tr>

          <tr className="tr">
            <th className="th">市町村・番地</th>
            <td>
              <TextField
                error={formik.touched.address1 && !!formik.errors.address1}
                helperText={formik.touched.address1 && formik.errors.address1}
                name="address1"
                placeholder="(例)品川区西五反田７丁目２２−１７"
                size="small"
                value={formik.values.address1}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    width: "230px",
                    height:"30px",
                    fontSize: "12px"
                  }
                }}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </td>
          </tr>

          <tr className="tr">
            <th className="th">建物名・号室</th>
            <td>
              <TextField
                name="address2"
                placeholder="(例)TOCビル 8F"
                size="small"
                value={formik.values.address2}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    width: "230px",
                    height:"30px",
                    fontSize: "12px"
                  }
                }}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button
        className="button"
        disabled={!formik.isValid}
        type="submit"
        style={{ opacity: formik.isValid ? 1 : 0.38 }}
      >
        登録
      </button>
    </form>
  );
}

export default App;
