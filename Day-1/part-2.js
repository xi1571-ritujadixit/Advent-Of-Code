const arr = [1664,1909,1904,1638,1844,1836,1648,1710,1163,1684,1857,1257,1718,1969,1968,1578,1870,1765,1846,1939,1858,1589,1586,1767,1628,1595,1601,1528,1724,1656,1555,1150,1992,1380,1142,1615,1659,1835,1403,1119,1719,1773,1613,1166,1924,1879,1663,1490,1726,1900,1228,1680,509,1637,1030,1536,1960,921,1894,1890,1829,1543,1565,1341,1572,1729,2006,1877,1787,1999,1742,1400,1851,1814,1985,1934,2004,1571,1993,1428,1623,1753,488,2008,2007,1793,1762,1803,1564,17,1800,1373,1764,1573,1643,1640,1990,1098,1361,1806,1754,1699,1444,1967,1365,1761,1493,1678,1833,1603,1677,1722,268,1991,1807,1839,1231,1419,1577,1884,1668,1852,1816,1626,31,1123,1617,1614,1915,1899,1971,1954,1425,792,1634,1206,1988,1303,1946,1942,1360,1431,1979,1897,1597,1700,1335,1769,1495,1590,1801,1982,1809,1594,1338,1995,1569,1824,1445,1399,1818,1657,1683,1916,1653,1966,82,1102,1535,1748,1609,1996,722,1646,1167,1784,1616,529,1788,1691,1940,1596,1838,1811,1813,1591,1741,1606,1871,1997,1827,1492,1789,2002,1702,1876,1251,1237,1510,1093]

for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
        for(let k = j+1; k < arr.length; k++) {
            if((arr[i] + arr[j] + arr[k]) === 2020) {
                console.log(arr[i], arr[j], arr[k])
                console.log(arr[i] * arr[j] * arr[k])
            }
        }
    }
}