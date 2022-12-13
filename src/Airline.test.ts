jest.useFakeTimers();
import Airline from "./Airline";

/**
 * 간단한 비행기 탑승 시뮬레이션입니다.
 * 비행기 탑승은 1명씩 체크인이 가능합니다.
 * 체크인은 출국 심사관에 따라서 랜덤한 시간을 가집니다.
 * 현재 여러 타입라인으로 구성되어있습니다.
 */

describe("Airline", () => {
    it("첫번째 문제", () => {
        /**
         * 타임라인의 순서를 보장해주세요.
         */

        const gabiaAirline = new Airline();

        gabiaAirline.addToLine("Lime1");
        gabiaAirline.addToLine("Ellie2");
        gabiaAirline.addToLine("Wally3");
        gabiaAirline.addToLine("Mory4");

        jest.runAllTimers();

        expect(gabiaAirline.customersOnBoard).toStrictEqual([
            "Lime1",
            "Ellie2",
            "Wally3",
            "Mory4"
        ]);
    });

    it("두번째 문제", () => {
      /**
       * 비행기 사정으로 인해서 선착순으로 도착한 2명만 탑승이 가능합니다.
       */

      const gabiaAirline = new Airline();

      gabiaAirline.addToLine("Lime1");
      gabiaAirline.addToLine("Ellie2");
      gabiaAirline.addToLine("Wally3");
      gabiaAirline.addToLine("Mory4");

        jest.runAllTimers();

        expect(gabiaAirline.customersOnBoard).toStrictEqual([
        "Lime1",
        "Ellie2"
      ]);
    });

    it("세번째 문제", () => {
      /**
       * 비행사에서 고객이 탑승할 때마다 로그를 가지려고합니다.
       * 탑승고객을 콘솔로 찍어주세요.
       * log-{탑승고객명} 으로 출력해주세요.
       * addCustomerOnBoard 에서 Log를 찍어야합니다.
       */
      const consoleWarnMock = jest.spyOn(console, "log").mockImplementation();

      const gabiaAirline = new Airline();

      gabiaAirline.addToLine("Lime1");
      gabiaAirline.addToLine("Ellie2");

      jest.runAllTimers();

      expect(consoleWarnMock.mock.calls).toEqual(
        expect.arrayContaining([["log-Lime1"], ["log-Ellie2"]])
      );

      consoleWarnMock.mockRestore();
    });
});
