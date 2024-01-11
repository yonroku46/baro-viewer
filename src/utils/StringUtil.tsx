export default function StringUtil() {
  function commaSeparate(num: number): string {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function currency(num: number, unitFlg: boolean = true): string {
    let formatNum = num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (formatNum === 'NaN') {
      formatNum = '0';
    }
    return unitFlg ? `¥${formatNum}` : formatNum;
  }

  function formatParmDate(beforeDate: Date, afterDate: Date): string {
    const beforeYear = beforeDate.getFullYear();
    const beforeMonth = beforeDate.getMonth() + 1;
    const beforeDay = beforeDate.getDate();

    const afterYear = afterDate.getFullYear();
    const afterMonth = afterDate.getMonth() + 1;
    const afterDay = afterDate.getDate();

    return `${beforeYear}년 ${beforeMonth}월 ${beforeDay}일 - ${afterYear}년 ${afterMonth}월 ${afterDay}일`;
  }

  function formatYYYYMMDD(date: Date): string {
    const formatDate = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatDate.format(date);
  }

  function formatMM(date: Date): string {
    const formatDate = new Intl.DateTimeFormat('ko-KR', {
      month: 'numeric',
    });
    return formatDate.format(date);
  }

  function relativeTime(dateValue: Date) {
    const today = new Date();
    const targetDate = new Date(dateValue);
    const betweenTime = Math.floor(
      (today.getTime() - targetDate.getTime()) / 1000 / 60,
    );
    if (betweenTime < 1) {
      return '조금전';
    }
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 31) {
      return `${betweenTimeDay}일전`;
    }
    const betweenTimeMonth = Math.floor(betweenTime / 60 / 24 / 30);
    if (betweenTimeMonth < 13) {
      return `${betweenTimeMonth}개월전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  return {
    commaSeparate,
    currency,
    formatParmDate,
    formatYYYYMMDD,
    formatMM,
    relativeTime,
  };
}
