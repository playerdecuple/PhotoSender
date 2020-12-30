const input = document.getElementById("fileInput");
const sendButton = document.getElementById("send");
const connectionUrl = "localhost:7777";
var files = [];

input.addEventListener('change', (e) => {
    files = e.target.files;

    if (files.length != 0) {
        alert(`${files.length}개의 파일을 업로드했어요. '전송' 버튼을 누르면 서버로 전송합니다.`);
    }
});

sendButton.addEventListener('click', () => {
    const selectedFiles = files;
    const studentInformation = document.getElementById("info").value;
    const studentResult = studentInformation === '' ? '30300 홍길동' : studentInformation;

    if (selectedFiles.length < 1) {
        alert("파일을 선택해 주세요!");
        return;
    }
    
    for (const file of selectedFiles) {
        let reader = new FileReader;
        reader.readAsDataURL(file);

        reader.onload = () => {
            const imgURL = `${reader.result}`;
            jQuery.ajax({
                url: `http://${connectionUrl}/image-sender/`,
                method: 'post',
                type: 'post',
                data: {
                    student_info: `${studentResult}`,
                    image_url: `${imgURL}`
                },
                dataType: "json"
            });
        };
    }

    var resultLabel = document.getElementById("resultLabel");
    resultLabel.innerText = `전송을 완료했습니다.`;
});
