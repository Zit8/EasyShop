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
        },
        {
          name: "OZON",
          description: "Ozon Fresh (formerly Ozon Express) is an express delivery service for fresh products, groceries and everyday items. Currently available in 9 cities in Russia and growing, Ozon Fresh offers delivery time up to 60 minutes on an assortment of more than 25,000 products.",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wE9UJeQ6OgljvnGHN0frOAfupr77MvUhtA&usqp=CAU",
          city: "Moccow",
          address: "123112, Москва, Пресненская наб., д. 10, блок С, комплекс «Башня на набережной»",
          phone: "89675453423",
          email: "ozon@mail.com",
          startTime: "08:00",
          finishingTime: "22:22",
          weekdays: "sunday",
          userId: 1,
        },
        {
          name: "aliexpress",
          description: "AliExpress — глобальная виртуальная торговая площадка, предоставляющая возможность покупать товары производителей из КНР, а также России, Европы, Турции и других стран. Товары на площадке продаются в розницу и мелким оптом. Платформа не работает в КНР — там её заменяет",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHH1xq0jOQeeLbb3y0brS4RqlzDzMHF5p8g&usqp=CAU",
          city: "Beijeng",
          address: "123112, Beijeng, Ghgghhy., д. 10, dddd С, Ghjkhdkhckdschj",
          phone: "8967545344567",
          email: "alick@mail.com",
          startTime: "08:00",
          finishingTime: "22:22",
          weekdays: "sunday",
          userId: 1,
          ratingLink:'<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/aliexpress/217396642876/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Aliexpress</a><a href="https://yandex.ru/maps/20576/protvino/category/point_of_delivery/18955887118/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Пункт выдачи в Протвино</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.212153%2C54.866083&mode=search&oid=217396642876&ol=biz&z=16.81" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>',
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
