function validateInput(value) {
  if (isNaN(value)) {
    console.log(
      `Ups! ${value} bukan angka yang valid. Silakan masukkan angka.
`
    );
    return null;
  }
  return parseFloat(value);
}

function calculator(num1, num2, operasi) {
  console.log("Selamat datang di Kalkulator Sederhana!");

  num1 = validateInput(num1);
  if (num1 === null) return;

  num2 = validateInput(num2);
  if (num2 === null) return;

  let hasil;
  let operasiStr = "";
  let simbol = "";

  switch (operasi) {
    case "+":
      hasil = num1 + num2;
      operasiStr = "penjumlahan";
      simbol = "+";
      break;
    case "-":
      hasil = num1 - num2;
      operasiStr = "pengurangan";
      simbol = "-";
      break;
    case "*":
      hasil = num1 * num2;
      operasiStr = "perkalian";
      simbol = "*";
      break;
    case "/":
      if (num2 === 0) {
        console.log("Ups! Pembagian dengan nol tidak diperbolehkan");
        return;
      } else {
        hasil = num1 / num2;
        operasiStr = "pembagian";
        simbol = "/";
        break;
      }
    default:
      console.log(`Ups! ${operasi} bukan pilihan yang valid`);
      return;
  }
  console.log(`Hasil ${operasiStr} ${num1} ${simbol} ${num2} adalah ${hasil}
`);
}

calculator(20, 10, "+");
calculator(10, "x", "-");
calculator(10, 5, "*");
calculator(20, 0, "/");
