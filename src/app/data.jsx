import Accordions from "./components/Accordions";
import Faq from "./components/Faq";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneFlip } from "react-icons/fa6";
const images = Array.from({ length: 40 }, (_, i) => i + 1);
const items = [
  // introduction
  {
    id: "introduction",
    title: "معرفی",
    content: (
      <>
        <h2 className="text-xl font-bold mb-5">
          بوت کمپ فرانت اند زمستان ۱۴۰۴؛ شروعی مطمئن برای برنامه نویسی
        </h2>
        <p className="mb-2 text-justify فثطف-">
          ما باور داریم آموزش باید شما را تا رسیدن به بازار کار همراهی کند به
          همین دلیل بوت کمپ زمستان ۱۴۰۴ تنها یک دوره آموزشی نیست؛ بلکه مسیری است
          که شما را به یک برنامه نویس آماده کار تبدیل میکند. این دوره به شکلی
          طراحی شده که حتی اگر از صفر شروع کنید پس از پایان آن نیازی به هیچ دوره
          آموزشی دیگری نخواهید داشت
        </p>
        <h2 className="text-xl font-bold my-5">
          ورکشاپ کاریابی و پول سازی؛ برگ برنده بوت کمپ
        </h2>
        <p className="mb-2 text-justify">
          یکی از بخشهای کلیدی و منحصربه فرد در این بوت کمپ ورکشاپ کاریابی و
          درآمدزایی از لینکدین است. این ورکشاپ به شما کمک میکند تا مهارتهایتان
          را به فرصتهای واقعی شغلی تبدیل کنید با حضور در این ورکشاپ دیگر لازم
          نیست ماه ها منتظر بمانید تا رزومه شما دیده شود یا ناامید شوید. ما به
          شما نشان میدهیم چطور با یک مسیر اصولی خیلی زود وارد بازار کار برنامه
          نویسی فرانتاند شوید و اولین درآمد خود را تجربه کنید.
        </p>
        <h2 className="text-xl font-bold mb-5">هدف اصلی بوت کمپ فرانت</h2>
        <p className="mb-2 text-justify">
          هدف اصلی این دوره تبدیل کردن شما به یک توسعه دهنده فرانت اند است که
          بتواند تمام کارهای لازم در این سمت را به خوبی انجام بده و از کدنویسی
          لی اوت طراحی سایت گرفته تا پیاده سازی یک وب سایت داینامیک با ری اکت و
          نکست و برقراری ارتباط با سرور را به خوبی انجام دهد. حتما و قطعا یاد
          میگیریم که یک اپلیکیشن وب را با استفاده از ری اکت و به تنهایی و تیمی
          توسعه داده و با استفاده از گیت آن را بین تیم به خوبی مدیریت کنیم این
          دوره از آموزش HTML و CSS شروع شده و در ادامه با یادگیری مفاهیم ری اکت
          به مهارتی میرسیم که به تنهایی بتونیم یک وب اپلیکیشن ری اکت یا نکست را
          کد نویسی کنیم.
        </p>
      </>
    ),
  },
  //   requierd
  {
    id: "requierd",
    title: "نیازمندی‌ها",
    content: (
      <>
        <h2 className="text-xl font-bold mb-5">مرور چند نکته مهم</h2>
        <ul className="list-disc ml-5 mb-2 text-sm text-gray-600 space-y-3 text-justify">
          <li>
            برای ثبت نام توی این دوره به هیچ پیش نیاز و پیش زمینه ای نیازی
            ندارید. پس اگر از صفر صفر میخواهید برنامه نویسی رو شروع کنید. این
            بوت کمپ دقيقا مناسب شماست
          </li>
          <li>
            رشته تحصیلی هیچ ارتباطی به اینکه شما میتونید برنامه نویس بشید نداره
            حتی اگر رشته تحصیلی شما پرستاری هنر حقوق، مهندسی و ... بوده هست
            میتونید به برنامه نویسی فکر کنید و ثبت نام کنید
          </li>
          <li>
            در دوره های قبل افراد بسیار زیادی که در رنج سنی 30 تا 45 سال بوده
            اند در دوره شرکت کرده اند. اگر میخواهید برنامه نویسی رو یاد بگیرید.
            سن معیار اصلی نیست اما از این جهت مهمه که در کنار ابعاد دیگه زندگی
            تون زمان کافی رو برای یادگیری بگذارید.
          </li>
          <li>
            تنها شرط ثبت نام توی این دوره داشتن زمانی کافی برای تمرین روزانه
            است. حداقل به 2 ساعت زمان شما در روز نیاز داریم ما بر اساس همین زمان
            روزانه 2 ساعت برنامه ریزی دقیق روزانه و هفتگی رو انجام دادیم پس اگر
            در روز 2 ساعت زمان خالی برای آموزش دیدن ندارید. این دوره نمیتونه
            مناسب شما باشه.
          </li>
          <li>
            علاوه بر استاد همیشه پشتیبانی و منتور رو دارید همچنین در یک گروه رفع
            اشکال در کنار منتور و استادتون قدم به قدم جلو میرید.
          </li>
          <li>
            هیچ دوره برنامه نویسی صفر تا صدی وجود نداره و هر کس چنین ادعایی
            میکنه احتمالا تجربه چندانی در برنامه نویسی نداره ما هدف مون اینه که
            در طی بوت کمپ فرانت اند از نقطه صفر به جایی برسید که بتونید وارد
            بازار کار بشید و توی تیم کار بکنید.
          </li>
        </ul>
        <p>
          شروع یادگیری به مهارت جدید میتونه سخت باشه اما بنظرم سخت ترین قسمت فقط
          شروع کاره کافیه شروع کنید تا طی آموزشها و برنامه های منظم این بوت کمپ
          بدون سعی و خطا و اتلاف وقت به هدف تون برسید. این بوت کپ صرفا به دوره
          آموزشی نیست قراره که در طی آزمون های میان دوره آزمون های پایان دوره
          وبینارهای لایو کدینگ و وبینارهای پرسش پاسخ و در کنار منتور و پشتیبان
          همه اشکالات تون رفع بشه و به بهترین نتیجه ممکن برسید.
        </p>
      </>
    ),
  },
  //   feature
  {
    id: "feature",
    title: "ویژگی‌ها",
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              برنامه ریزی دقیق و منظم
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-10 w-10 text-rose-600 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              در بوت کمپ 9 ماه کنار شما هستیم. از شنبه تا پنج شنبه هر هفته به
              صورت روزانه برنامه دقیقی بهتون میدیم. کافیه روزی 2 ساعت وقت
              بگذارید تا بهترین نتیجه ممکن رو بگیرید.
            </p>
          </div>
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              کلاس های آنلاین هفتگی
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 text-purple-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              هر هفته یک کلاس آنلاین دارید تا محتوای هفته قبلی رو کامل براتون
              تدریس کنیم. در کلاس های آنلاین تمام نکات گفته شده در برنامه هفته
              قبلی مرور و بررسی میشه. همچنین روی پروژه ها Code Reivew میکنیم که
              هیچ ابهامی براتون باقی نمونه.
            </p>
          </div>
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              آزمون های میان دوره و پایان دوره
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              در طی هر دوره چندین آزمون میان دوره به صورت چالش های آنلاین لایو
              کدینگ برگزار خواهد شد. همچنین در پایان هر دوره یه آزمون پایان دوره
              برگزار میشه که دانش شما توسط منتورا ارزیابی بشه و مشکلات احتمالی
              رو رفع کنید.
            </p>
          </div>
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              آموزش با کیفیت و به روز
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              تمام آموزش ها و دوره هایی که در این بوت‌کمپ در اختیار شما قرار
              داده میشوند کاملا آپدیت و بر اساس آخرین آپدیت هر تکنولوژی می باشد.
            </p>
          </div>
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">پروژه محور</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 text-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              تمام آموزش ها بر اساس پروژه های حرفه ای و جامع درخور بازار کار
              ارائه خواهد شد. به گونه ای که بتونید همین پروژه ها رو در رزومه خود
              بگذارید و دست پر وارد بازار کار بشید.
            </p>
          </div>
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              گزارش عملکرد روزانه
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 text-teal-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              دانشجو موظف هست که روزانه عملکرد خودش رو گزارش بدهد تا اگر مشکل
              احتمالی در روند بوت کمپ باشد، سریعا پیگیری و رفع شود تا نهایتا یک
              آموزش مستمر را پیش ببریم..
            </p>
          </div>
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              معرفی به بازار کار
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 text-fuchsia-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              در پایان بوت کمپ به دانشجویان برتر این فرصت را میدهیم که در پروژه
              های ما همکاری کنند و همچنین به بازار کار و تیم های برنامه نویسی
              معرفی کنیم.
            </p>
          </div>
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              پشتیبانی و منتورینگ
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 text-indigo-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              در طول فرآیند یادگیری، یک تیم کامل پشتیبانی و منتورینگ به همراه
              استاد کنار شما است تا هر گونه چالش و مشکلی را در سریعترین زمان
              ممکن حل کنیم.
            </p>
          </div>
          <div className="bg-white space-y-3 rounded-xl p-4 text-center flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-center">
              ورکشاپ کاریابی و پولسازی
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-10 w-10 text-pink-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
              ></path>
            </svg>
            <p className="text-gray-600 text-sm leading-relaxed">
              در پایان بوت کمپ یک رزومه کامل رو خواهید داشت که شامل چندین پروژه
              جامع و فول استک هست. علاوه بر این، طی فرآیند برنامه ریزی شده در
              ورکشاپ کاریابی، کنارتون هستیم تا بتوانید سریع و اصولی از لینکدین
              اولین کارتون رو پیدا کنید.
            </p>
          </div>
        </div>
      </>
    ),
  },
  //   accordion
  {
    id: "accordion",
    title: "سرفصل‌ها",
    content: <Accordions />,
  },
  //   income
  {
    id: "income",
    title: "درامد",
    content: (
      <>
        <h2 className="text-2xl font-black mb-3">حداقل درآمد فرانت اند</h2>
        <p className="mb-2 text-base text-gray-700 leading-loose">
          بنظرم بهتره خودتون جواب این سوال رو پیدا کنید. کافیه با یه سرچ ساده در
          سایت جابینجا آگهی های استخدامی فرانت رو ببینید. متوجه خواهید شد که
          حقوق یه جونیور در سال 1403 بین 15-20 میلیون تومان در شروع کار است.
          قطعا بعد 3-6 ماه امکان افزایش حقوق و شرایط بهتر برای شما مهیا خواهد
          شد. مشابه شغل های مهارت محور، دستمزد و حقوق رو شما تعیین میکنید و به
          همین خاطر پیشرفت مالی در شغل برنامه نویسی بسیار چشم گیر است. به عنوان
          مثال دانشجوهایی رو داریم که بدون هیچ سابقه ای با حقوق 12 میلیون
          استخدام شدند و بعد 1 سال به حقوق بالای 25 میلیون هم رسیدند. دانشجویانی
          که بالای 2-3 سال سابقه کار دارن اکثرا با حقوق
        </p>
        <h2 className="text-xl font-bold my-5">هزینه یا سرمایه گذاری؟</h2>
        <p className="text-base leading-loose text-gray-700 mb-5">
          هزینه ای که شما برای این دوره آموزشی پرداخت می کنید میتوان گفت به هیچ
          عنوان هزینه نیست
          <strong>
            بلکه هوشمندانه ترین سرمایه گذاری است که میتوانید برروی خود انجام
            دهید.
          </strong>
          شما وارد مسیری خواهید شد که هیچ محدودیت درآمدی در آن وجود نخواهد داشت
          و با اطمینان خاطر می توان گفت که بعد از پشت سر گذاشتن این دوره آموزشی،
          <strong>
            با انجام فقط ۱ پروژه ابتدایی یا حقوق یه ماه اول، چند برابر هزینه این
            دوره را کسب خواهید کرد.
          </strong>
          در پایان شما تخصصی را به دست می آورید که به صورت مادام العمر همراه شما
          خواهد بود و در هر مکان یا زمان که اراده کنید، این امکان وجود دارد تا
          از این تخصص درآمد میلیونی داشته باشید.
        </p>
      </>
    ),
  },
  //   accordion
  {
    id: "accordion",
    title: "سرفصل‌ها",
    content: <Faq />,
  },
  //   presingin
  {
    id: "presingin",
    title: "مشاوره قبل ثبت نام",
    content: (
      <>
        <h2 className="text-2xl font-black mb-3"> مشاوره قبل ثبت نام</h2>
        <p className="mb-2 text-base text-gray-700 leading-loose">
          میتوانید از طریق راه های ارتباطی پایین با ما در ارتباط باشید:
        </p>
        <ul className="space-y-2">
          <li className="flex gap-2 items-center">
            <FaPhoneFlip className="text-amber-600" />
            <a href="" className="">
              09123456789
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <FaTelegram className="text-blue-600" />
            <a href="" className="">
              test
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <IoLogoWhatsapp className="text-green-800" />
            <a href="" className="">
              test
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <RiInstagramFill className="text-rose-500" />
            <a href="" className="">
              test
            </a>
          </li>
        </ul>
      </>
    ),
  },
  //   experience
  {
    id: "experience",
    title: "تجربه دانشجویان",
    content: (
      <>
        <h2 className="text-xl font-bold mb-5"> تجربه دانشجویان</h2>
        <p>بخشی از تجربه های دانشجویان بوت کمپ های قبلی رو با هم ببینیم:</p>
        <div className="flex gap-4 my-5">
          {images.map((num) => (
            <img
              key={num}
              src={`/images/experience${num}.jpg`}
              alt={`experience ${num}`}
              className="w-[70%] h-auto rounded-lg shadow"
            />
          ))}
        </div>
      </>
    ),
  },
];
export default items;
