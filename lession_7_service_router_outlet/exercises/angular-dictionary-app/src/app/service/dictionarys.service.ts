import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';


@Injectable({
  providedIn: 'root'
})
export class DictionarysService {
  words: Dictionary[] = [
    {
      englishMean: 'Hello',
      vietnameseMean: 'Xin chao',
      details: 'Thán từ, Danh từ'
    },
    {
      englishMean: 'Book',
      vietnameseMean: 'Sach',
      details: 'Danh từ\n' +
        'sách\n' +
        'old book\n' +
        'sách cũ\n' +
        'book of reference\n' +
        'sách tham khảo\n' +
        'tập\n' +
        'a book of tickets\n' +
        'tập vé\n' +
        'phần lời của ca kịch\n' +
        'books\n' +
        'số nhiều\n' +
        'sổ sách kế toán\n' +
        'the Book\n' +
        'kinh thánh\n' +
        'the book\n' +
        '(số ít)\n' +
        'sổ niên giám điện thoại\n' +
        'be in somebody\'s good (bad) books\n' +
        '(khẩu ngữ)\n' +
        'được ai yêu mến (không được ai ưa)\n' +
        'bring somebody to book [for something]\n' +
        'tra hỏi ai\n' +
        'by the book\n' +
        '(khẩu ngữ)\n' +
        'hoàn toàn đúng theo quy tắc\n' +
        'he\'s always careful to do things by the book\n' +
        'anh ta luôn luôn thận trọng để thực hiện mọi việc đúng theo qui tắc\n' +
        'cook the books\n' +
        'xem cook\n' +
        'every (any) trick in the book\n' +
        'xem trick\n' +
        '[be] on the books of something\n' +
        'được thuê làm cầu thủ cho một đội bóng đá nào đó\n' +
        'he\'s on Everton\'s books\n' +
        'anh ta được thuê làm cầu thủ cho một đội Everton\n' +
        'an open book\n' +
        'xem open\n' +
        'read somebody like a book\n' +
        'xem read\n' +
        'suit one\'s (somebody\'s) books\n' +
        'xem suit\n' +
        'take a leaf out of somebody\'s book\n' +
        'xem leaf\n' +
        'throw the book at somebody\n' +
        '(khẩu ngữ)\n' +
        'nhắc nhở ai làm đúng thủ tục khi thực hiện nhiệm vụ\n' +
        'Động từ\n' +
        'giữ (chỗ) trước, mua (vé) trước\n' +
        'book a seat on plane\n' +
        'giữ cho trước trên máy bay\n' +
        'the performance is fully booked up\n' +
        'buổi biểu diễn người ta đã giữ trước hết chỗ rồi\n' +
        'we\'re booked on the next flight\n' +
        'chúng tôi đã đăng ký vé vào chuyến bay tới\n' +
        'thuê, mướn\n' +
        'we\'re booked a conjuror for our Christmas party\n' +
        'chúng tôi đã mướn một người làm trò ảo thuật cho bữa liên hoan đêm Giáng sinh của chúng ta\n' +
        'ghi tên (phạt)\n' +
        'the police booked me for speeding\n' +
        'cảnh sát đã ghi tên phạt tôi vì lái xe quá tốc độ\n'
    },
    {
      englishMean: 'Table',
      vietnameseMean: 'Cai Ban',
      details: 'Danh từ\n' +
        'cái bàn\n' +
        'bàn ăn; những người ngồi ăn\n' +
        'set the table\n' +
        'bày bàn ăn\n' +
        'set all the table laughing\n' +
        'làm cho tất cả người ngồi ăn cười lên\n' +
        '(cách viết khác tableland) cao nguyên\n' +
        'bảng, biểu\n' +
        'table of contents\n' +
        'bảng mục lục\n' +
        'learn one\'s [multiplication] tables\n' +
        'học bảng cửu chương\n' +
        'at table\n' +
        'khi ngồi ăn\n' +
        'children must learn to behave at table\n' +
        'trẻ em phải học cách ngồi ăn uống cho phải phép\n' +
        'they were at table when we called\n' +
        'khi chúng tôi gọi, họ đang ăn\n' +
        'drink somebody under the table\n' +
        'xem drink\n' +
        'lay (put) one\'s cards on the table\n' +
        'xem card\n' +
        'the negotiating table\n' +
        'xem negotiate\n' +
        'on the table\n' +
        '(Anh) được đưa ra thảo luận và bàn bạc\n' +
        'management have put several new proposals on the table\n' +
        'ban giám đốc đã đưa ra nhiều đề nghị mới để thảo luận bàn bạc\n' +
        'để sẽ bàn bạc lại sau(nói về một đề nghị)\n' +
        'turn the tables [on somebody]\n' +
        'đảo ngược tình thế đối với ai; giành ưu thế đối với ai\n' +
        'under the table\n' +
        'đưa (tiền) để đút lót\n' +
        'wait at table\n' +
        'xem wait\n' +
        'Động từ\n' +
        '(Anh) đệ trình (lên Quốc hội) để thảo luận bàn bạc\n' +
        'the Opposition have tabled several amendments to the bill\n' +
        'phe đối lập đã đệ trình lên Quốc hội nhiều sửa đổi đối với dự luật để thảo luận bàn bạc\n' +
        '(Mỹ) để (một đề nghị) sẽ bàn lại sau\n',
    },
    {
      englishMean: 'Fan',
      vietnameseMean: 'Cai quat',
      details: 'Danh từ\n' +
        'cái quạt\n' +
        'vật hình quạt\n' +
        'quạt máy\n' +
        'it\'s so hot, please turn the fan on\n' +
        'trời nóng quá, làm ơn bật quạt đi\n' +
        'Động từ\n' +
        '(-nn-)\n' +
        'quạt\n' +
        'cool one\'s face by fanning it with a newspaper\n' +
        'lấy tờ báo quạt cho mát mặt\n' +
        'fan a fire\n' +
        'quạt lửa\n' +
        'thổi hiu hiu lên\n' +
        'the breeze fanned our faces\n' +
        'cơn gió thổi hiu hiu lên mặt chúng tôi\n' +
        '(+out) xòe (bài) ra như hình quạt\n' +
        'fan the flames [of something]\n' +
        'thổi (tình cảm) bùng lên\n' +
        'fan out\n' +
        'dàn rộng ra, trải rộng ra\n' +
        'the troops fanned out as they advanced\n' +
        'quân lính vừa tiến lên vừa dàn rộng ra\n' +
        'Danh từ\n' +
        'người say mê; người hâm mộ\n' +
        'football fans\n' +
        'những người say mê bóng đá'
    },
    {
      englishMean: 'Camera',
      vietnameseMean: 'May anh',
      details: 'Danh từ\n' +
        'máy chụp ảnh; máy quay truyền hình\n' +
        'in camera\n' +
        'trong phòng riêng của quan tòa; xử kín\n' +
        'the trial was held in camera\n' +
        'phiên tòa được xử kín\n ',
    },
    {
      englishMean: 'Run',
      vietnameseMean: 'Chay',
      details: 'Động từ\n' +
        '(-nn-)(ran;run)\n' +
        'chạy\n' +
        'run fast\n' +
        'chạy nhanh\n' +
        'run 400 metres\n' +
        'chạy đua 400 mét\n' +
        'he ran (came running) to meet us\n' +
        'nó chạy lại gặp chúng tôi\n' +
        'he had to run to catch the bus\n' +
        'nó phải chạy ra để xem điều gì đang xảy đến\n' +
        'the buses run every ten minutes\n' +
        'cứ mười phút lại có một chuyến xe buýt\n' +
        'chạy, vận hành\n' +
        'trains run on rails\n' +
        'xe hỏa chạy trên đường sắt\n' +
        'could you run the engine for a moment?\n' +
        'anh có thể cho máy chạy một lúc không?\n' +
        'chạy, trôi, lướt qua\n' +
        'he ran his eyes over the page\n' +
        'nó lướt mắt qua trang sách\n' +
        'the pen runs fast\n' +
        'thời gian trôi qua nhanh\n' +
        'a shiver ran down her spine\n' +
        'cái rùng mình chạy suốt dọc sống lưng cô ta\n' +
        'his fingers ran over the keys of the piano\n' +
        'ngón tay anh ta lướt nhanh trên phím đàn pi-a-nô\n' +
        'mang lén vào, đưa lén vào\n' +
        'run contraband goods into a country\n' +
        'đưa lén hàng lậu vào một nước\n' +
        'ngược dòng sông từng đàn (cá hồi…)\n' +
        'the salmon are running\n' +
        'cá hồi đang ngược dòng sông từng đàn\n' +
        'mọc lan ra (cây)\n' +
        'ivy ran over the walls of the cottage\n' +
        'dây thường xuân mọc lan ra tường ngôi nhà tranh\n' +
        'kéo dài (một thời gian nào đó)\n' +
        'election campaigns in Britain run for three weeks\n' +
        'vận động bầu cử ở Anh kéo dài ba tuần lễ\n' +
        'có hiệu lực\n' +
        'the lease on my house has only a year to run\n' +
        'hợp đồng cho thuê nhà tôi chỉ có hiệu lực một năm\n' +
        'được thuật lại trên báo chí, đăng (tin); được kể, được viết\n' +
        'the Sunday Times ran a story about the discovery of Hitler\'s diaries\n' +
        'tờ Thời báo Chủ nhật thuật lại chuyện tìm ra nhật ký của Hitler\n' +
        'the story runs in these words\n' +
        'câu chuyện được kể như thế này\n' +
        'chảy, cho chảy; rót; để chảy\n' +
        'rivers run into the sea\n' +
        'sông chảy ra biển\n' +
        'the tears ran down her cheeks\n' +
        'nước mắt chảy xuống má cô ta\n' +
        'water was running all over the bathroom floor (the bath room floor was running with water)\n' +
        'nước chảy ra khắp sàn buồng tắm\n' +
        'she ran hot water into the bowl\n' +
        'cô ta rót nước nóng vào bát\n' +
        'who left the tap running?\n' +
        'ai đã để vòi nước chảy không thế?\n' +
        'your nose is running\n' +
        'mũi anh chảy nước kìa\n' +
        'the smoke makes my eyes run\n' +
        'khói làm tôi chảy nước mắt\n' +
        'dầm dề, đầm đìa; lênh láng\n' +
        'his face was running with sweat\n' +
        'mặt nó đầm đìa mồ hôi\n' +
        'the streets were running with blood after the massacre\n' +
        'sau vụ thảm sát, đường phố lênh láng máu\n' +
        'thôi ra (màu ở quần áo)\n' +
        'I\'m afraid the colour ran when I washed your new shirt\n' +
        'tôi sợ màu sẽ thôi ra khi giặt chiếc sơ-mi mới của anh\n' +
        'tan chảy\n' +
        'it was so hot that the butter ran\n' +
        'trời nóng đến nỗi bơ tan chảy ra\n' +
        'lên cao hơn (mực nước sông…), chảy mạnh hơn\n' +
        'the tide was running strong\n' +
        'thủy triều chảy mạnh hơn\n' +
        'trở nên, trở thành\n' +
        'the river ran dry during in the drought\n' +
        'con sông [trở nên] cạn đi trong mùa hạn hán\n' +
        'I have run short of money\n' +
        'tôi đã cạn tiền\n' +
        'điều khiển, quản lý\n' +
        'run a factory\n' +
        'điều khiển một nhà máy\n' +
        'run a hotel\n' +
        'quản lý một khách sạn\n' +
        'tổ chức\n' +
        'the college runs courses for foreign learners of English\n' +
        'nhà trường mở lớp dạy hè cho người ngoại quốc học tiếng Anh\n' +
        '(chủ yếu Mỹ) ứng cử; giới thiệu ra ứng cử\n' +
        'how many candidates are running in the Presidential election?\n' +
        'có bao nhiêu người ứng cử trong kỳ bầu tổng thống thế?\n' +
        'how many candidates is the Liberal Party running in the General Election?\n' +
        'Đảng Tự do giới thiệu bao nhiêu người ra ứng cử kỳ tổng tuyển cử này thế?\n' +
        '(Mỹ) tuột, sổ\n' +
        'silk stockings sometimes run\n' +
        'bít tất tơ đôi khi bị tuột sợi\n' +
        'come running\n' +
        'hăm hở làm cái mà ai đó cần\n' +
        'if you offer the children rewards for helping, they\'ll all come running\n' +
        'nếu anh thưởng cho trẻ khi chúng giúp anh thì chúng sẽ hăm hở đến ngay\n' +
        'run for it\n' +
        'chạy để thoát khỏi (tay ai, nguy hiểm…)\n' +
        'run for it – he\'s got a gun!\n' +
        'chạy thoát đi, nó có súng đấy!\n' +
        'run across\n' +
        'tình cờ gặp (ai);tình cờ tìm thấy, tình cờ bắt được (cái gì)\n' +
        'I ran across my old friend Ba in Paris last week\n' +
        'tôi tình cờ gặp người bạn cũ là Ba ở Pa-ri tuần trước\n' +
        'run after\n' +
        '(không dùng ở dạng bị động)\n' +
        'đuổi theo, săn đuổi\n' +
        'the dog was running after a rabit\n' +
        'con chó đuổi theo con thỏ\n' +
        '(khẩu ngữ) chạy theo, theo đuổi\n' +
        'she runs after every good-looking man she meets\n' +
        'cô ta chạy theo mọi người đàn ông ưa nhìn mà cô ta gặp\n' +
        'run along\n' +
        '(khẩu ngữ)\n' +
        '(dùng ở thức mệnh lệnh để bảo, nhất là bảo trẻ em đi ra xa)\n' +
        'run along now, children, I\'m busy\n' +
        'nào các cháu, bây giờ thì đi đi, bác bận đây\n' +
        'run at somebody\n' +
        '(không dùng ở dạng bị động)\n' +
        'lao vào, xông vào(ai)\n' +
        'he ran at me with a knife\n' +
        'nó xông vào tôi, tay cầm dao\n' +
        'ở mức (bao nhiêu đấy)\n' +
        'inflation is running at record levels\n' +
        'lãi suất ở mức kỷ lục\n' +
        'run away\n' +
        'đột ngột bỏ (ai, nơi nào) mà đi\n' +
        'don\'t run away - I want your advice\n' +
        'đừng bỏ đi, tôi cần lời chỉ bảo của bạn\n' +
        'he ran away from home at the age of thirteen\n' +
        'nó bỏ nhà đi ở tuổi mười ba\n' +
        'né tránh(vì sợ, vì thiếu tin tưởng…)\n' +
        'run away from a difficult situation\n' +
        'né tránh một tình thế khó khăn\n' +
        'run away with\n' +
        'cuỗm đi\n' +
        'he ran away with all my jewels\n' +
        'nó đã cuỗm đi tất cả kim hoàn của tôi\n' +
        'chi phối, điều khiển(nói về tình cảm)\n' +
        'don\'t let your temper run away with you\n' +
        'đừng để cơn giận chi phối anh\n' +
        'bỏ nhà (bỏ chồng con) theo (trai)\n' +
        'she ran away with her boss\n' +
        'chị ta bỏ chồng con đi theo ông chủ\n' +
        'tiêu thụ nhiều\n' +
        'my new car really runs away with the petrol\n' +
        'chiếc xe mới củatôi thực sự tiêu thụ nhiều xăng\n' +
        'thắng dễ dàng\n' +
        'the champion ran away with the match\n' +
        'quán quân thắng cuộc thi đấu một cách dễ dàng\n' +
        'run back over something\n' +
        'thảo luận lại, xem xét lại\n' +
        'I\'ll run back over the procedure once again\n' +
        'tôi sẽ xem xét lại thủ tục một lần nữa\n' +
        'run down\n' +
        '[làm cho] không chạy nữa [làm cho] chết máy\n' +
        'my car battery has run down, it needs recharging\n' +
        'ắc quy ở xe tôi không chạy nữa, phải nạp lại thôi\n' +
        'suy giảm dần, suy sút dần\n' +
        'the coal industry is running down\n' +
        'công nghiệp than đá đang suy sút dần\n' +
        'chê bai; bôi xấu\n' +
        'he\'s jealous, that is why he\'s always running you down\n' +
        'hắn ghen tị với thành công của anh, vì thế mà hắn luôn luôn bôi xấu anh\n' +
        'tìm thấy, tìm được\n' +
        'I finally ran the book down in the university library\n' +
        'cuối cùng tôi đã tìm thấy cuốn sách ấy ở thư viện trường đại học\n' +
        'va phải, húc ngã(nói về xe cộ)\n' +
        'the cyclist was run down by a lorry\n' +
        'người đi xe đạp bị xe tải húc ngã\n' +
        'run in'
    },
    {
      englishMean: 'Debug',
      vietnameseMean: 'Sua loi',
      details: 'Động từ\n' +
        '(-gg-)(khẩu ngữ)\n' +
        'tìm sai, gỡ rối (chương trình máy điện toán…)\n' +
        'tìm dỡ các máy nghe trộm (ở một tòa nhà…)\n' +
        'the place has been completely debugged\n' +
        'vị trí đã dỡ hết các máy nghe trộn\n'
    }
    ,
    {
      englishMean: 'Present',
      vietnameseMean: 'Hien Tai, Mon Qua',
      details: 'Tính từ\n' +
        '(vị ngữ) có mặt, hiện diện\n' +
        'everybody present welcomed the decision\n' +
        'mọi người có mặt đều hoan nghênh quyết định ấy\n' +
        'there were 200 people present at the meeting\n' +
        'đã có hai trăm người có mặt trong buổi họp\n' +
        'analysis showed that cocaine was present in the mixture\n' +
        'phân tích đã cho thấy có cocain trong hỗn hợp\n' +
        '(thuộc ngữ) hiện nay, hiện tại, nay, này\n' +
        'the present world situation\n' +
        'tình trạng thế giới hiện nay\n' +
        'in the present case\n' +
        'trong trường hợp này\n' +
        '(thuộc ngữ) đang xem xét, đang bàn'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.words;
  }

  getDetailsByEnglishMean(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (word === this.words[i].englishMean) {
        return this.words[i].details;
      }
    }
  }

  getVietnameseMean(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (word === this.words[i].englishMean) {
        return this.words[i].vietnameseMean;
      }
    }
  }

  getEnglishMeanByWord(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (word === this.words[i].vietnameseMean) {
        return this.words[i].englishMean;
      }
    }
  }
}
