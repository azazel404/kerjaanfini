$(function () {
    var loading = $('#loadbar').hide();
    $(document)
        .ajaxStart(function () {
            loading.show();
        }).ajaxStop(function () {
            loading.hide();
        });

    //variable nampung nomor soal
    var questionNo = 0;
    //variable nampung jawaban benar
    var correctCount = 0;
    //variable soal dan option soal
    var q = [
        {
            'Q': 'Tidak punya cara yang konsisten untuk melakukan banyak hal',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Suka berbicara dan sulit mendengarkan',
            'A': 1,
            'C': ['Ya',
                'Tidak'
            ]
        },
        {
            'Q': 'Menyukai kegiatan baru terus-menerus karena tidak merasa senang melakukan hal yang sama sepanjang waktu',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Bisa merebut hati orang lain melalui pesona kepribadian',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {

            'Q': 'Penuh gairah dalam kehidupan',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Suka menghidupkan pesta sebagai diinginkan orang sebagai tamu pesta',
            'A': 1,
            'C': ['Ya',
                'Tidak'
            ]
        },
        {
            'Q': 'Secara konsisten memiliki semangat yang tinggi dan suka membagikan kebahagiaan kepada orang lain',
            'A': 1,
            'C': ['Ya',
                'Tidak'
            ]
        },
        {
            'Q': 'Tidak punya cara yang konsisten untuk melakukan banyak hal',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Tidak tepat waktu (suka terlambat)',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Lugu dan ceroboh',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Berkepribadian hangat',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Tidak terstruktur (penuh improvisasi)',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': '',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Tidak memiliki banyak pertimbangan',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
        {
            'Q': 'Tidak bisa tenang (cenderung emosian)',
            'A': 1,
            'C':
                ['Ya',
                    'Tidak'
                ]
        },
    ];

    var dataAnswer = {
      Sanguinis: [
        "Characteristics",
        "Optimis, humoris dan mudah bergaul.Kamu terkenal banyak omongnya dan dapat berkomunikasi dengan baik serta selalu mendominasi. Kamu suka menjadi pusat perhatian dan juga membuat orang lain senang. Kamu membawa dirimu sebagai seorang SUPERSTAR!",
        "Kelemahan",
        "Kamu cepat berubah, moody, sulit berkonsentrasi dan kurang konsisten Terkadang karena terlalu asyik mengobrol, membuat orang sanguinis menjadi lupa waktu yang membuatnya kurang disiplin",
        "Pekerjaan yang cocok",
        "pekerjaan yang cocok untuk kepribadian sanguinis yang satu ini adalah sebagai pelaksana ide dan pengajak orang lain untuk mengerjaakan sesuatu. Cocoknya bekerja sebagai marketing karena akan berhubungan dengan orang banyak, karena gampang bergaul.Orang sanguinis ini juga cocok sebagai ketua dalam oraganisasi kemasyarakatan karena kemampuannya mempengaruhi orang di sekitarnya untuk melakukan suatu pekerjaan, sebagai customer service, sebagai pekerja yang melayani orang lain, misalnya sebagai suster atau dokter.",
        "Tips",
        "Kadang seorang sanguinis bisa sangat spontan dan tergesa-gesa dalam melakukan banyak hal. Dia bisa begitu sembrono sampai menyusahkan orang lain. Hal ini bisa diseimbangkan oleh si melankolis yang dikenal bisa jadi perencana yang baik, yang sangat bisa diandalkan untuk melakukan sesuatu secara detail dan teliti.Seorang sanguinis sangat menuruti nafsu dalam dirinya, mulai dari makan, aktivitas, dll. Hal ini harus lebih diperhatikan karena jika tidak dikontrol dengan baik, tentunya akan menimbulkan berbagai penyakit.Sanguinis membutuhkan manajemen waktu yang baik sehingga segala aktivitasnya dapat terlaksana dengan baik dan sesuai dengan rencana."
      ],
      Melankolis: [
        "Characteristics",
        "Sensitif, romantis, perfeksionis, simpatis, pendengar yang baik. Kamu mempunyai rasa seni yang tinggi. Kamu penyayang dan rela berkorban. Melankolis dapat mengerjakan suatu hal dengan jauh dan juga sikap yang tekun dibandingkan tipe lainnya. melankolis cenderung introvert atau sulit berkembang dilingkungan sosial, pemikir yakni mereka lebih senang memikirkan hal-hal sebelum melakukannya dan terakhir adalah pesimis atau cenderung berpikir kearah negatif.",
        "Kelemahan",
        "Melankolis cenderung mudah tertekan, hal ini terjadi karena mereka harus menetapkan standar yang tinggi dan cenderung melakukan berbagai hal dengan sempurna. Melankolis suka terjebak di masa lalu dan sedih berkepanjangan. Kalau ada masalah biasanya diumpetin, terlalu sering berpikiran negatif, suka meremehkan diri sendiri.Melankolis seringkali tidak memiliki teman. Bagi mereka memuji merupakan hal yang terselubung dan mencurigakan, sedangkan menghibur sama halnya dengan menghabiskan waktu untuk hal yang tidak berguna.",
        "Pekerjaan yang cocok",
        "Pengusaha banyak juga di minati oleh pribadi-pribadi melankolis, karakternya yang fokus terhadap satu bidang usahanya membuat mereka mau tidak mau untuk mengerjakan pekerjaannya dengan baik.  Penulis juga memiliki jiwa melankolis, Mereka memiliki jiwa melankolis. Sebab mereka butuh ketenangan di tempat-tempat hening, agar dapat berimajinasi membuat karya tulisa yang jadi luar biasa. Programer sudah di pastikan adalah seorang introvert dan juga seorang programer memiliki sifat melankolis, Hal ini tidak bisa di bantahkan lagi. Kebanyakan dari mereka menghabiskan waktunya sendiri dan berdiam diri dirumahnya.",
        "Tips",
        "Melankolis perlu mengungkapkan secara lisan apa yang mereka rasakan kepada orang lain. Mereka harus belajar mempercayai orang lain untuk dijadikan teman berbagi.Seorang melankolis bisa jadi pendendam. Ketika hatinya terluka, dia bisa sangat sulit memaafkan orang yang telah melukainya. Sifatnya yang pendendam ini bisa dinetralkan oleh seorang sanguinis yang dikenal mudah memaafkan dan tak gampang tersinggung"
      ]
    };
    

    $(document.body).on('click', "label.element-animation", function (e) {

        var parent, ink, d, x, y;
        parent = $(this);
        if (parent.find(".ink").length == 0)
            parent.prepend("<span class='ink'></span>");

        ink = parent.find(".ink");
        ink.removeClass("animate");

        if (!ink.height() && !ink.width()) {
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({ height: "100px", width: "100px" });
        }

        x = e.pageX - parent.offset().left - ink.width() / 2;
        y = e.pageY - parent.offset().top - ink.height() / 2;

        ink.css({ top: y + 'px', left: x + 'px' }).addClass("animate");
        //ripple end

        var choice = $(this).parent().find('input:radio').val();
        console.log(choice);
        var anscheck = $(this).checking(questionNo, choice);//$( "#answer" ).html(  );      
        q[questionNo].UC = choice;
        if (choice == 1) {
            correctCount++;
            q[questionNo].result = "10";
        }
        else {
            correctCount += 0;
            q[questionNo].result = "0";
        }

        console.log("CorrectCount:" + correctCount);

        var personalitytest;
        var toAppend = '';
        if (correctCount >= 8) {
            personalitytest = "Sanguinis";
        }
        else {
            personalitytest = "Melankolis";
        }
        if (personalitytest === "Sanguinis") {
             toAppend += `
             <td>
             <h4>${dataAnswer.Sanguinis[0]}</h4>
             <p class="text-justify">${dataAnswer.Sanguinis[1]}</p>
             <h4>${dataAnswer.Sanguinis[2]}</h4>
             <p class="text-justify">${dataAnswer.Sanguinis[3]}</p>
             <h4>${dataAnswer.Sanguinis[4]}</h4>
             <p class="text-justify">${dataAnswer.Sanguinis[5]}</p>
             <h4>${dataAnswer.Sanguinis[6]}</h4>
             <p class="text-justify">${dataAnswer.Sanguinis[7]}</p>
             </td>`;           
        } else {
             toAppend += `
             <td>
             <h4>${dataAnswer.Melankolis[0]}</h4>
             <p class="text-justify">${dataAnswer.Melankolis[1]}</p>
             <h4>${dataAnswer.Melankolis[2]}</h4>
             <p class="text-justify">${dataAnswer.Melankolis[3]}</p>
             <h4>${dataAnswer.Melankolis[4]}</h4>
             <p class="text-justify">${dataAnswer.Melankolis[5]}</p>
             <h4>${dataAnswer.Melankolis[6]}</h4>
             <p class="text-justify">${dataAnswer.Melankolis[7]}</p>
             </td>`;    
        }

        setTimeout(function () {
            $('#loadbar').show();
            $('#quiz').fadeOut();
            questionNo++;
            if ((questionNo + 1) > q.length) {
                alert("Quiz completed, Now click ok to get your result");
                $('label.element-animation').unbind('click');
                $('#quizResult').html(toAppend);
                $('#totalCorrect').html("Personality: " + personalitytest);
                $('#quizResult').show();
                $('#loadbar').fadeOut();
                $('#result-of-question').show();
                $('#graph-result').show();
            }
            else {
                $('#qid').html(questionNo + 1);
                $('input:radio').prop('checked', false);
                setTimeout(function () {
                    $('#quiz').show();
                    $('#loadbar').fadeOut();
                }, 1500);
                $('#question').html(q[questionNo].Q);
                $($('#f-option').parent().find('label')).html(q[questionNo].C[0]);
                $($('#s-option').parent().find('label')).html(q[questionNo].C[1]);
            }
        }, 1000);
    });

    $(document).ready(function(){
        $("#submitdata").click(function() {
          var email = $("#email").val;
          $.ajax({
            type: "POST",
            url: "kirim.php",
            data: email,
            success: function() {
              alert("it was a success send it");
            }
          });
        });
    })

    $.fn.checking = function (qstn, ck) {
        var ans = q[questionNo].A;
        if (ck != ans)
            return false;
        else
            return true;
    };

});	