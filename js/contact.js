document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // جمع البيانات من النموذج
    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const message = this.message.value;

    // إنشاء محتوى البريد الإلكتروني
    const subject = "رسالة جديدة من النموذج";
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    // ترميز المحتوى لاستخدامه في mailto
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // إنشاء رابط mailto
    const mailtoLink = `mailto:lunahealthy2001@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    // فتح عميل البريد الإلكتروني
    window.location.href = mailtoLink;
});