import { Category } from "../../types/category";
import charactorImage from "../../assets/images/categories/charactor.webp";
import absentMindedAudio from "../../assets/audio/charactor/absent-minded.mp3";
import adventurousAudio from "../../assets/audio/charactor/adventurous.mp3";
import aggressiveAudio from "../../assets/audio/charactor/aggressive.mp3";
import ambitiousAudio from "../../assets/audio/charactor/ambitious.mp3";
import amusingAudio from "../../assets/audio/charactor/amusing.mp3";
import arrogantAudio from "../../assets/audio/charactor/arrogant.mp3";
import braveAudio from "../../assets/audio/charactor/brave.mp3";
import brightAudio from "../../assets/audio/charactor/bright.mp3";
import carelessAudio from "../../assets/audio/charactor/careless.mp3";
import cheekyAudio from "../../assets/audio/charactor/cheeky.mp3";
import cleverAudio from "../../assets/audio/charactor/clever.mp3";
import confidentAudio from "../../assets/audio/charactor/confident.mp3";
import cowardlyAudio from "../../assets/audio/charactor/cowardly.mp3";
import decisiveAudio from "../../assets/audio/charactor/decisive.mp3";
import easyGoingAudio from "../../assets/audio/charactor/easy-going.mp3";
import friendlyAudio from "../../assets/audio/charactor/friendly.mp3";
import fussyAudio from "../../assets/audio/charactor/fussy.mp3";
import generousAudio from "../../assets/audio/charactor/generous.mp3";
import gratefulAudio from "../../assets/audio/charactor/grateful.mp3";
import honestAudio from "../../assets/audio/charactor/honest.mp3";
import kindAudio from "../../assets/audio/charactor/kind.mp3";
import loyalAudio from "../../assets/audio/charactor/loyal.mp3";
import matureAudio from "../../assets/audio/charactor/mature.mp3";
import meanAudio from "../../assets/audio/charactor/mean.mp3";
import modestAudio from "../../assets/audio/charactor/modest.mp3";
import nastyAudio from "../../assets/audio/charactor/nasty.mp3";
import niceAudio from "../../assets/audio/charactor/nice.mp3";
import patientAudio from "../../assets/audio/charactor/patient.mp3";
import reliableAudio from "../../assets/audio/charactor/reliable.mp3";
import reservedAudio from "../../assets/audio/charactor/reserved.mp3";
import rudeAudio from "../../assets/audio/charactor/rude.mp3";
import selfishAudio from "../../assets/audio/charactor/selfish.mp3";
import sensibleAudio from "../../assets/audio/charactor/sensible.mp3"; // lỗi
import spitefulAudio from "../../assets/audio/charactor/spiteful.mp3"; // lỗi
import stubbornAudio from "../../assets/audio/charactor/stubborn.mp3";
import stupidAudio from "../../assets/audio/charactor/stupid.mp3";
import tenseAudio from "../../assets/audio/charactor/tense.mp3";
import tiredAudio from "../../assets/audio/charactor/tired.mp3";
import tolerantAudio from "../../assets/audio/charactor/tolerant.mp3";
import trustAudio from "../../assets/audio/charactor/trust.mp3";
import bigotedAudio from "../../assets/audio/charactor/bigoted.mp3";
import bitchyAudio from "../../assets/audio/charactor/bitchy.mp3";
import bossyAudio from "../../assets/audio/charactor/bossy.mp3";
import conceitedAudio from "../../assets/audio/charactor/conceited.mp3";
import creativeAudio from "../../assets/audio/charactor/creative.mp3";
import dullAudio from "../../assets/audio/charactor/dull.mp3";
import garrulousAudio from "../../assets/audio/charactor/garrulous.mp3";
import gentleAudio from "../../assets/audio/charactor/gentle.mp3";
import greedyAudio from "../../assets/audio/charactor/greedy.mp3";
import gregariousAudio from "../../assets/audio/charactor/gregarious.mp3";
import heartlessAudio from "../../assets/audio/charactor/heartless.mp3";
import industriousAudio from "../../assets/audio/charactor/industrious.mp3";
import intelligentAudio from "../../assets/audio/charactor/intelligent.mp3";
import lazyAudio from "../../assets/audio/charactor/lazy.mp3";
import lovingAudio from "../../assets/audio/charactor/loving.mp3";
import optimisticAudio from "../../assets/audio/charactor/optimistic.mp3";
import pessimisticAudio from "../../assets/audio/charactor/pessimistic.mp3";
import pickyAudio from "../../assets/audio/charactor/picky.mp3";
import punctualAudio from "../../assets/audio/charactor/punctual.mp3"; // lỗi
import selfCentredAudio from "../../assets/audio/charactor/self-centred.mp3";
import sensitiveAudio from "../../assets/audio/charactor/sensitive.mp3";
import sociableAudio from "../../assets/audio/charactor/sociable.mp3"; // lỗi
import stingyAudio from "../../assets/audio/charactor/stingy.mp3";
import tetchyAudio from "../../assets/audio/charactor/tetchy.mp3";
import timidAudio from "../../assets/audio/charactor/timid.mp3";
import vainAudio from "../../assets/audio/charactor/vain.mp3";
import wittyAudio from "../../assets/audio/charactor/witty.mp3";

export const charactorVocabulary: Category = {
  id: "charactor",
  title: "Charactor",
  description: "Tính cách",
  imageUrl: charactorImage,
  words: [
    {
      word: "Absent-minded",
      phonetic: "/ˌæbsəntˈmaɪndɪd/",
      audioUrl: absentMindedAudio,
      meaning: "Đãng trí",
      example:
        "He was so absent-minded that he forgot where he parked his car.",
    },
    {
      word: "Adventurous",
      phonetic: "/ədˈventʃərəs/",
      audioUrl: adventurousAudio,
      meaning: "Thích phiêu lưu",
      example:
        "She's always been adventurous, traveling to remote places on her own.",
    },
    {
      word: "Aggressive",
      phonetic: "/əˈɡresɪv/",
      audioUrl: aggressiveAudio,
      meaning: "Hung hăng, hiếu chiến",
      example: "The company is pursuing an aggressive marketing strategy.",
    },
    {
      word: "Ambitious",
      phonetic: "/æmˈbɪʃəs/",
      audioUrl: ambitiousAudio,
      meaning: "Đầy tham vọng",
      example: "She is ambitious and hopes to become a doctor one day.",
    },
    {
      word: "Amusing",
      phonetic: "/əˈmjuːzɪŋ/",
      audioUrl: amusingAudio,
      meaning: "Làm cho buồn cười",
      example: "The comedian's jokes were highly amusing.",
    },
    {
      word: "Arrogant",
      phonetic: "/ˈærəɡənt/",
      audioUrl: arrogantAudio,
      meaning: "Kiêu căng, kiêu ngạo",
      example:
        "He’s so arrogant, always acting like he’s better than everyone else.",
    },
    {
      word: "Brave",
      phonetic: "/breɪv/",
      audioUrl: braveAudio,
      meaning: "Dũng cảm",
      example:
        "The brave firefighter rescued the child from the burning building.",
    },
    {
      word: "Bright",
      phonetic: "/braɪt/",
      audioUrl: brightAudio,
      meaning: "Sáng dạ, thông minh",
      example: "She's a bright student who excels in all her classes.",
    },
    {
      word: "Careless",
      phonetic: "/ˈkeələs/",
      audioUrl: carelessAudio,
      meaning: "Bất cẩn, cẩu thả",
      example: "His careless driving caused an accident.",
    },
    {
      word: "Cheeky",
      phonetic: "/ˈtʃiːki/",
      audioUrl: cheekyAudio,
      meaning: "Hỗn xược",
      example: "The cheeky boy made a sarcastic remark to his teacher.",
    },
    {
      word: "Clever",
      phonetic: "/ˈklevə(r)/",
      audioUrl: cleverAudio,
      meaning: "Thông minh",
      example: "The clever solution he proposed saved the project.",
    },
    {
      word: "Confident",
      phonetic: "/ˈkɒnfɪdənt/",
      audioUrl: confidentAudio,
      meaning: "Tự tin",
      example: "She is confident about her ability to win the competition.",
    },
    {
      word: "Cowardly",
      phonetic: "/ˈkaʊədli/",
      audioUrl: cowardlyAudio,
      meaning: "Nhát gan",
      example:
        "He acted cowardly by running away instead of helping his friend.",
    },
    {
      word: "Decisive",
      phonetic: "/dɪˈsaɪsɪv/",
      audioUrl: decisiveAudio,
      meaning: "Kiên quyết, dứt khoát",
      example: "Her decisive actions during the crisis saved the company.",
    },
    {
      word: "Easy-going",
      phonetic: "/ˌiːziˈɡəʊɪŋ/",
      audioUrl: easyGoingAudio,
      meaning: "Dễ dàng, dễ tính, dễ gần",
      example: "He is easy-going and gets along with everyone.",
    },
    {
      word: "Friendly",
      phonetic: "/ˈfrendli/",
      audioUrl: friendlyAudio,
      meaning: "Thân thiện",
      example: "She is a very friendly person.",
    },
    {
      word: "Fussy",
      phonetic: "/ˈfʌsi/",
      audioUrl: fussyAudio,
      meaning: "Cầu kỳ, kén cá",
      example: "She's very fussy about her food.",
    },
    {
      word: "Generous",
      phonetic: "/ˈdʒenərəs/",
      audioUrl: generousAudio,
      meaning: "Rộng lượng, hào phóng",
      example: "He is a very generous man.",
    },
    {
      word: "Grateful",
      phonetic: "/ˈgreɪtfəl/",
      audioUrl: gratefulAudio,
      meaning: "Biết ơn",
      example: "I am grateful for your help.",
    },
    {
      word: "Honest",
      phonetic: "/ˈɒnɪst/",
      audioUrl: honestAudio,
      meaning: "Thật thà, lương thiện",
      example: "She is an honest person.",
    },
    {
      word: "Kind",
      phonetic: "/kaɪnd/",
      audioUrl: kindAudio,
      meaning: "Tử tế, tốt bụng",
      example: "He is very kind to animals.",
    },
    {
      word: "Loyal",
      phonetic: "/ˈlɔɪəl/",
      audioUrl: loyalAudio,
      meaning: "Trung thành, trung nghĩa",
      example: "She is a loyal friend.",
    },
    {
      word: "Mature",
      phonetic: "/məˈtʃʊər/",
      audioUrl: matureAudio,
      meaning: "Trưởng thành",
      example: "He is very mature for his age.",
    },
    {
      word: "Mean",
      phonetic: "/miːn/",
      audioUrl: meanAudio,
      meaning: "Keo kiệt",
      example: "Don't be so mean to her.",
    },
    {
      word: "Modest",
      phonetic: "/ˈmɒdɪst/",
      audioUrl: modestAudio,
      meaning: "Khiêm tốn, nhũ nhặn",
      example: "She is very modest about her achievements.",
    },
    {
      word: "Nasty",
      phonetic: "/ˈnɑːsti/",
      audioUrl: nastyAudio,
      meaning: "Bẩn thỉu, thô tục, xấu tính",
      example: "Don't be so nasty to him.",
    },
    {
      word: "Nice",
      phonetic: "/naɪs/",
      audioUrl: niceAudio,
      meaning: "Tốt, dễ thương, đẹp",
      example: "It's a nice day today.",
    },
    {
      word: "Patient",
      phonetic: "/ˈpeɪʃənt/",
      audioUrl: patientAudio,
      meaning: "Kiên nhẫn, bền chí",
      example: "You have to be patient with children.",
    },
    {
      word: "Reliable",
      phonetic: "/rɪˈlaɪəbl/",
      audioUrl: reliableAudio,
      meaning: "Đáng tin cậy",
      example: "He is a very reliable person.",
    },
    {
      word: "Reserved",
      phonetic: "/rɪˈzɜːvd/",
      audioUrl: reservedAudio,
      meaning: "Kín đáo, dè dặt",
      example: "She is a very reserved person.",
    },
    {
      word: "Rude",
      phonetic: "/ruːd/",
      audioUrl: rudeAudio,
      meaning: "Thô lỗ, bất lịch sự",
      example: "It's rude to interrupt people.",
    },
    {
      word: "Selfish",
      phonetic: "/ˈselfɪʃ/",
      audioUrl: selfishAudio,
      meaning: "Ích kỷ",
      example: "He is very selfish.",
    },
    {
      word: "Sensible",
      phonetic: "/ˈsensəbl/",
      audioUrl: sensibleAudio,
      meaning: "Hợp lý, có lý trí",
      example: "That's a very sensible decision.",
    },
    {
      word: "Spiteful",
      phonetic: "/ˈspaɪtfəl/",
      audioUrl: spitefulAudio,
      meaning: "Hằn học, cố ý gây tổn thương",
      example: "She is a spiteful woman.",
    },
    {
      word: "Stubborn",
      phonetic: "/ˈstʌbən/",
      audioUrl: stubbornAudio,
      meaning: "Bướng bỉnh, ngoan cố",
      example: "He is very stubborn.",
    },
    {
      word: "Stupid",
      phonetic: "/ˈstjuːpɪd/",
      audioUrl: stupidAudio,
      meaning: "Ngu ngốc, chậm hiểu",
      example: "It was a stupid mistake to leave the door unlocked.",
    },
    {
      word: "Tense",
      phonetic: "/tens/",
      audioUrl: tenseAudio,
      meaning: "Căng thẳng, bồn chồn, hồi hộp",
      example: "She felt tense before her big presentation.",
    },
    {
      word: "Tired",
      phonetic: "/ˈtaɪəd/",
      audioUrl: tiredAudio,
      meaning: "Mệt mỏi",
      example: "He was so tired after working all night.",
    },
    {
      word: "Tolerant",
      phonetic: "/ˈtɒlərənt/",
      audioUrl: tolerantAudio,
      meaning: "Khoan dung",
      example: "She is tolerant of other people’s beliefs.",
    },
    {
      word: "Trust",
      phonetic: "/trʌst/",
      audioUrl: trustAudio,
      meaning: "Lòng tin, sự tín nhiệm",
      example: "Trust is the foundation of any strong relationship.",
    },
    {
      word: "Bigoted",
      phonetic: "/ˈbɪɡətɪd/",
      audioUrl: bigotedAudio,
      meaning: "Tin mù quáng",
      example: "His bigoted views made him unpopular.",
    },
    {
      word: "Bitchy",
      phonetic: "/ˈbɪtʃi/",
      audioUrl: bitchyAudio,
      meaning: "Có ác ý",
      example: "She made a bitchy comment about her coworker.",
    },
    {
      word: "Bossy",
      phonetic: "/ˈbɒsi/",
      audioUrl: bossyAudio,
      meaning: "Hống hách, hách dịch",
      example: "He’s so bossy, always telling everyone what to do.",
    },
    {
      word: "Careless",
      phonetic: "/ˈkeələs/",
      audioUrl: carelessAudio,
      meaning: "Sơ suất, bất cẩn",
      example: "Her careless handling of the situation caused more problems.",
    },
    {
      word: "Conceited",
      phonetic: "/kənˈsiːtɪd/",
      audioUrl: conceitedAudio,
      meaning: "Tự phụ, tự cao tự đại",
      example: "He's so conceited that he never listens to others.",
    },
    {
      word: "Creative",
      phonetic: "/kriˈeɪtɪv/",
      audioUrl: creativeAudio,
      meaning: "Sáng tạo",
      example: "She is very creative and comes up with innovative ideas.",
    },
    {
      word: "Dull",
      phonetic: "/dʌl/",
      audioUrl: dullAudio,
      meaning: "Chậm hiểu, ngu đần, thẫn thờ",
      example: "The lecture was so dull that everyone lost interest.",
    },
    {
      word: "Garrulous",
      phonetic: "/ˈɡærələs/",
      audioUrl: garrulousAudio,
      meaning: "Nói nhiều, ba hoa, lắm lời",
      example: "He became garrulous after a few drinks.",
    },
    {
      word: "Gentle",
      phonetic: "/ˈdʒentl/",
      audioUrl: gentleAudio,
      meaning: "Hiền lành, dịu dàng, hòa nhã",
      example: "She spoke in a gentle voice to calm the child.",
    },
    {
      word: "Greedy",
      phonetic: "/ˈɡriːdi/",
      audioUrl: greedyAudio,
      meaning: "Tham lam",
      example: "His greedy behavior alienated his friends.",
    },
    {
      word: "Gregarious",
      phonetic: "/ɡrɪˈɡeəriəs/",
      audioUrl: gregariousAudio,
      meaning: "Thích đàn đúm, thích giao du",
      example: "He is gregarious and loves attending social gatherings.",
    },
    {
      word: "Heartless",
      phonetic: "/ˈhɑːtləs/",
      audioUrl: heartlessAudio,
      meaning: "Vô tâm, nhẫn tâm",
      example: "Her heartless remarks made everyone uncomfortable.",
    },
    {
      word: "Industrious",
      phonetic: "/ɪnˈdʌstriəs/",
      audioUrl: industriousAudio,
      meaning: "Cần cù, siêng năng, chăm chỉ",
      example: "She is an industrious worker who always meets her deadlines.",
    },
    {
      word: "Intelligent",
      phonetic: "/ɪnˈtelɪdʒənt/",
      audioUrl: intelligentAudio,
      meaning: "Thông minh, sáng dạ, nhanh trí",
      example: "He is intelligent and solves problems quickly.",
    },
    {
      word: "Lazy",
      phonetic: "/ˈleɪzi/",
      audioUrl: lazyAudio,
      meaning: "Lười biếng",
      example: "He is too lazy to clean his own room.",
    },
    {
      word: "Loving",
      phonetic: "/ˈlʌvɪŋ/",
      audioUrl: lovingAudio,
      meaning: "Âu yếm, đằm thắm",
      example: "She is a loving mother who always puts her family first.",
    },
    {
      word: "Optimistic",
      phonetic: "/ˌɒptɪˈmɪstɪk/",
      audioUrl: optimisticAudio,
      meaning: "Lạc quan",
      example: "He is optimistic about the future of his business.",
    },
    {
      word: "Pessimistic",
      phonetic: "/ˌpesɪˈmɪstɪk/",
      audioUrl: pessimisticAudio,
      meaning: "Bi quan",
      example: "She is pessimistic and always expects the worst.",
    },
    {
      word: "Picky",
      phonetic: "/ˈpɪki/",
      audioUrl: pickyAudio,
      meaning: "Cầu kỳ, kiểu cách, kén cá chọn canh",
      example: "He is picky about the food he eats.",
    },
    {
      word: "Punctual",
      phonetic: "/ˈpʌŋktʃuəl/",
      audioUrl: punctualAudio,
      meaning: "Có tính đúng giờ",
      example: "She is always punctual for her meetings.",
    },
    {
      word: "Self-centred",
      phonetic: "/ˌselfˈsentəd/",
      audioUrl: selfCentredAudio,
      meaning: "Chỉ biết mình",
      example: "His self-centred attitude made him lose friends.",
    },
    {
      word: "Sensitive",
      phonetic: "/ˈsensətɪv/",
      audioUrl: sensitiveAudio,
      meaning: "Nhạy cảm, có sự cảm thông",
      example: "She is sensitive and often cries during sad movies.",
    },
    {
      word: "Sociable",
      phonetic: "/ˈsəʊʃəbl/",
      audioUrl: sociableAudio,
      meaning: "Dễ gần, chan hòa, hòa đồng",
      example: "He is sociable and makes friends easily.",
    },
    {
      word: "Stingy",
      phonetic: "/ˈstɪndʒi/",
      audioUrl: stingyAudio,
      meaning: "Keo kiệt, bủn xỉn",
      example: "He is so stingy that he refuses to tip the waiter.",
    },
    {
      word: "Tetchy",
      phonetic: "/ˈtetʃi/",
      audioUrl: tetchyAudio,
      meaning: "Hay bực mình, cáu kỉnh, càu nhàu",
      example: "He gets tetchy when he doesn’t have his morning coffee.",
    },
    {
      word: "Timid",
      phonetic: "/ˈtɪmɪd/",
      audioUrl: timidAudio,
      meaning: "Rụt rè, nhút nhát, bẽn lẽn, dễ sợ hãi",
      example: "She is too timid to speak up in meetings.",
    },
    {
      word: "Vain",
      phonetic: "/veɪn/",
      audioUrl: vainAudio,
      meaning: "Kiêu ngạo, tự phụ, tự đắc",
      example: "He is vain and spends hours looking at himself in the mirror.",
    },
    {
      word: "Witty",
      phonetic: "/ˈwɪti/",
      audioUrl: wittyAudio,
      meaning: "Hóm hỉnh, dí dỏm",
      example: "His witty remarks kept everyone entertained.",
    },
  ],
};
