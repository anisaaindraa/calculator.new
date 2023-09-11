// Variabel untuk menyimpan nilai memori
let memoryValue = 0;

// Fungsi untuk menghapus nilai di layar
function clearDisplay() {
    document.getElementById('result').value = '';
}

// Fungsi untuk menambahkan teks ke layar
function appendToDisplay(text) {
    document.getElementById('result').value += text;
}

// Fungsi untuk menghitung hasil
function calculateResult() {
    const input = document.getElementById('result').value;
    try {
        const result = eval(input);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Fungsi untuk menghapus nilai memori (MC)
function memClear() {
    memoryValue = 0;
}

// Fungsi untuk mengambil nilai memori (MR)
function memRecall() {
    document.getElementById('result').value = memoryValue;
}

// Fungsi untuk menambahkan nilai ke memori (M+)
function memAdd() {
    const currentInput = document.getElementById('result').value;
    const currentValue = parseFloat(currentInput);
    if (!isNaN(currentValue)) {
        memoryValue += currentValue;
    }
}

// Fungsi untuk mengurangkan nilai dari memori (M-)
function memSubtract() {
    const currentInput = document.getElementById('result').value;
    const currentValue = parseFloat(currentInput);
    if (!isNaN(currentValue)) {
        memoryValue -= currentValue;
    }
}

// Fungsi untuk menyimpan nilai di memori (MS)
function memStore() {
    const currentInput = document.getElementById('result').value;
    const currentValue = parseFloat(currentInput);
    if (!isNaN(currentValue)) {
        memoryValue = currentValue;
    }
}
