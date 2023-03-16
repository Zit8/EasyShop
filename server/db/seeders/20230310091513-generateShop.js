/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Shops",
      [
        {
          name: "123",
          description: "123",
          logo: "123",
          city: "123",
          address: "123",
          phone: "123",
          email: "123",
          startTime: "123",
          finishingTime: "123",
          weekdays: "123",
          userId: 1,
          urlName: "123",
          ratingLink:
            '<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс Карты</a><a href="https://yandex.ru/maps/?from=mapframe&ll=37.311658%2C54.892546&mode=routes&rtext=54.917635%2C37.411200~54.865860%2C37.211943&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D1264265042~&utm_medium=mapframe&utm_source=maps&z=12.72" style="color:#eee;font-size:12px;position:absolute;top:14px;">улица Победы, 3: как доехать на автомобиле, общественным транспортом или пешком – Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.311658%2C54.892546&mode=routes&rtext=54.917635%2C37.411200~54.865860%2C37.211943&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D1264265042~&z=12.72" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>',
        },
        {
          name: "OZON",
          description:
            "Ozon Fresh (formerly Ozon Express) is an express delivery service for fresh products, groceries and everyday items. Currently available in 9 cities in Russia and growing, Ozon Fresh offers delivery time up to 60 minutes on an assortment of more than 25,000 products.",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wE9UJeQ6OgljvnGHN0frOAfupr77MvUhtA&usqp=CAU",
          city: "Moccow",
          address:
            "123112, Москва, Пресненская наб., д. 10, блок С, комплекс «Башня на набережной»",
          phone: "89675453423",
          email: "ozon@mail.com",
          startTime: "08:00",
          finishingTime: "22:22",
          weekdays: "sunday",
          userId: 1,
          ratingLink:
            '<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/20576/protvino/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Протвино</a><a href="https://yandex.ru/maps/20576/protvino/?from=mapframe&ll=37.216518%2C54.869227&mode=routes&rtext=54.870009%2C37.217171~54.865860%2C37.211943&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D18112889822~&utm_medium=mapframe&utm_source=maps&z=17.74" style="color:#eee;font-size:12px;position:absolute;top:14px;">улица Победы, 3: как доехать на автомобиле, общественным транспортом или пешком – Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=37.216518%2C54.869227&mode=routes&rtext=54.870009%2C37.217171~54.865860%2C37.211943&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D18112889822~&z=17.74" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>',
          urlName: "ozon",
        },
        {
          name: "aliexpress",
          description:
            "AliExpress — глобальная виртуальная торговая площадка, предоставляющая возможность покупать товары производителей из КНР, а также России, Европы, Турции и других стран. Товары на площадке продаются в розницу и мелким оптом. Платформа не работает в КНР — там её заменяет",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHH1xq0jOQeeLbb3y0brS4RqlzDzMHF5p8g&usqp=CAU",
          city: "Beijeng",
          address: "123112, Beijeng, Ghgghhy., д. 10, dddd С, Ghjkhdkhckdschj",
          phone: "8967545344567",
          email: "alick@mail.com",
          startTime: "08:00",
          finishingTime: "22:22",
          weekdays: "sunday",
          userId: 1,
          ratingLink:
            '<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/aliexpress/217396642876/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Aliexpress</a><a href="https://yandex.ru/maps/20576/protvino/category/point_of_delivery/18955887118/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Пункт выдачи в Протвино</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.212153%2C54.866083&mode=search&oid=217396642876&ol=biz&z=16.81" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>',
          urlName: "aliexpress",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
