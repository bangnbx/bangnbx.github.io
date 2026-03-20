(function() {
  var NEGATIVE_READ_CSV = "rocksdb,rocksdb_bloom,rocksdb_bloom_8G_limit_16G,redb,lmdb,lmdb_32G_mem,redb_32G_mem\n5479.08,568.33,738.99,1041.15,880.60,894.08,1017.14\n8788.56,918.32,1190.44,1542.70,1197.49,1238.26,1506.45\n9168.99,1061.84,1338.07,1874.02,1379.35,1435.93,1851.63\n9591.40,1122.53,1411.80,2066.70,1495.17,1547.88,2054.37\n9796.64,1219.59,1564.60,2240.74,1566.63,1623.33,2220.42\n10083.85,1234.49,1595.13,2370.13,1634.69,1686.66,2352.09\n9912.85,1282.46,1725.44,2411.40,1669.04,1714.80,2391.12\n11781.91,1339.26,1638.61,2474.28,1699.66,1750.85,2462.41\n11682.14,1570.25,1906.06,2530.71,1722.40,1770.23,2529.07\n12002.16,1491.37,1811.83,2626.52,1750.92,1798.86,2610.01\n11626.22,1603.00,1961.33,2678.51,1780.26,1812.95,2659.36\n12567.10,1473.14,1843.00,2669.74,1792.86,1833.28,2663.38\n12431.80,1578.93,1940.58,2703.49,1838.20,1844.09,2709.56\n12353.54,1739.85,2161.65,2731.13,1820.98,1864.77,2720.98\n13137.02,1687.06,2021.06,2737.67,1824.62,1879.41,2745.02\n12559.25,1625.82,1927.07,3077.81,1844.29,1893.05,2772.49\n13153.49,1602.52,2138.49,2830.96,1857.28,1908.94,2800.88\n13065.50,1728.47,2102.06,2823.93,1866.53,2129.73,2824.79\n13338.33,1739.94,2178.61,2879.02,1871.52,2754.95,2866.55\n13409.26,1697.64,2109.68,2892.21,1908.33,1947.31,2883.81\n13211.37,1821.13,2151.79,2907.93,1955.87,1929.95,2911.76\n13201.88,1663.97,2165.56,2949.23,1915.84,1934.81,2941.47\n13569.98,1951.62,2255.55,2957.06,1904.10,1941.35,2955.92\n13212.52,1773.36,2512.00,2958.43,1906.33,1948.16,3006.08\n13838.68,1853.52,2191.23,2967.21,1920.58,1960.62,2967.78\n13560.76,1781.80,2380.37,2981.02,1928.18,1970.45,2985.14\n13676.12,1818.15,2324.20,2996.16,1934.76,2010.91,2991.96\n13628.01,1909.85,2245.46,3019.71,1948.57,2342.44,2993.50\n13709.00,1816.15,2319.53,3036.55,1955.44,2026.00,3029.71\n13629.24,1951.02,2490.88,3050.18,1960.74,2009.30,3040.10\n14116.58,1905.17,2524.14,3051.36,1970.44,2016.29,3057.66\n13989.72,1929.69,2418.75,3048.72,1969.95,2373.40,3062.79\n14083.61,1970.34,2845.19,3096.98,1986.43,2381.17,3114.98\n14125.75,1914.44,2664.38,3126.70,2082.11,2095.97,3131.23\n14187.09,2049.10,2629.55,3163.56,2058.10,3699.54,3144.36\n14238.01,1979.76,2778.64,3170.24,2017.95,3674.46,3199.23\n14104.10,1924.47,2737.64,3192.35,2012.43,5870.77,3265.83\n14162.56,2090.09,2740.91,3201.50,2013.37,6176.21,8696.05\n14400.22,2009.11,3019.36,3232.91,2020.63,9639.00,5049.41\n14098.06,2082.52,2788.34,3253.10,2029.54,11186.06,5556.40\n14552.01,2102.25,3019.27,3262.65,2032.36,12778.36,8765.27\n14421.53,2141.69,3099.04,3288.73,2045.56,14872.11,7294.41\n14400.58,2245.19,3066.37,3316.44,2047.96,16945.78,8236.40\n14659.27,2070.01,2950.20,3335.90,2061.13,18707.15,9542.78\n14659.74,2284.88,3070.46,3336.85,2476.93,22073.08,10495.58\n14679.79,2226.49,3079.24,3377.15,2423.34,25862.06,14207.32\n14786.24,2166.05,2903.12,3386.77,2265.95,27703.64,16318.62\n14579.74,2254.72,3180.50,3397.91,2212.22,30982.67,16534.54\n14703.85,2170.05,3409.09,3388.56,2142.34,33941.67,16750.00\n14898.60,2331.28,3168.95,3394.00,2114.02,34855.02,19962.30\n14593.69,2281.81,3228.45,3407.77,2102.79,38353.37,22542.57\n14951.80,2417.08,3574.67,3421.16,2102.31,40560.94,24055.39\n15187.21,2304.90,3555.74,3415.46,2109.07,43448.80,28748.58\n16645.32,2376.48,3174.50,3428.91,2108.38,46143.36,30061.08\n15457.19,2399.83,3413.71,3425.25,2113.36,49591.50,28439.12\n14975.23,2481.67,3685.33,3404.96,2123.20,52675.21,28216.70\n15269.43,2493.42,3529.10,3448.65,2124.51,55718.17,31086.10\n14867.77,2549.76,3876.66,3435.44,2132.75,59500.09,31962.36\n14878.46,2476.69,3805.38,3445.66,2132.80,62057.59,31731.23\n15632.38,2509.82,3938.60,3429.87,2134.98,65449.48,31980.88\n15006.96,2499.22,4239.88,4501.88,2137.47,69150.77,32244.93\n15079.57,2766.49,4219.16,3717.12,2151.02,71361.20,34873.84\n15193.52,2542.54,3802.92,3531.95,2150.76,75445.44,33288.80\n14909.48,2754.32,3989.66,3521.26,2156.66,78217.67,34119.28\n15545.58,2579.72,3807.46,3500.02,2159.91,80899.92,33738.70\n15403.29,2563.74,4182.88,3481.81,2155.49,84472.10,33623.17\n15092.12,2653.64,4517.36,3511.80,2160.67,86754.18,33549.79\n15416.08,2904.66,4615.20,3530.87,2235.18,90170.38,33997.67\n15190.15,2597.54,4909.84,3524.71,2299.42,94044.05,36750.15\n17095.48,2737.84,4251.61,3545.05,2283.88,95765.24,36356.67\n16891.16,2701.78,3629.38,3600.24,2315.60,99842.49,36111.61\n16686.08,2676.48,4590.05,3651.75,2364.97,101278.64,37551.22\n16966.89,2886.89,4313.01,3643.48,2318.92,105733.55,39369.54\n16713.27,2739.54,5043.47,3635.67,2382.01,108538.11,39317.26\n16977.98,2754.66,4320.14,3645.06,2316.62,110453.99,39043.33\n17744.54,2684.43,3458.95,3652.95,2259.48,114366.64,42446.75\n16320.68,2713.25,3585.12,3668.62,2232.52,117650.42,42216.75\n16924.91,2936.93,4315.59,3695.17,2217.36,121169.74,42989.75\n17575.86,2884.81,3448.09,3702.58,2208.27,124161.11,44804.13\n16713.72,2700.16,3584.27,4585.74,2200.86,127370.64,44120.32\n17003.11,2707.18,4612.16,5053.32,2214.98,131235.79,66996.77\n17054.76,2901.83,4751.18,4197.47,2346.96,134513.62,71213.61\n17317.70,3098.37,3488.88,4038.28,2341.92,137726.54,56441.15\n17360.00,2922.22,4364.54,3900.97,2361.75,140706.20,49481.38\n17184.96,2999.23,4262.30,3898.46,2328.34,144281.60,47543.41\n17958.61,2981.80,4010.32,3892.57,2293.63,147428.82,49472.34\n17247.12,3123.61,3531.59,4855.87,2444.36,150472.25,48448.92\n17654.91,3108.20,4218.77,7519.05,2557.15,154538.07,48280.42\n17213.33,3482.15,4221.40,5719.49,3215.46,156945.92,50253.44\n18235.87,3518.92,3178.44,5070.26,4265.97,158140.94,49959.72\n18457.75,3314.01,4201.54,4853.38,3348.52,161482.93,48881.67\n17628.78,2893.07,4058.80,7547.13,3323.81,163553.99,49469.33\n19578.64,3441.92,3448.52,14273.56,4825.09,166389.60,53525.49\n20126.45,3387.89,2711.71,11980.89,7389.91,168928.61,52978.94\n18451.91,3750.36,3253.38,9385.24,6724.03,171232.16,49072.04\n17892.30,3432.76,3438.93,13848.63,6505.01,172612.12,53296.17\n17541.25,3251.81,2785.84,15297.43,9262.78,174652.53,52735.99\n17518.11,3847.67,2966.52,14814.92,9713.11,179212.49,50952.98\n17223.29,3976.47,3253.13,12442.92,10445.35,182225.26,51625.17\n17830.29,3740.39,2864.47,10975.19,11529.06,180683.03,53018.57";

  var WRITE_CSV = "rocksdb,rocksdb_bloom,rocksdb_bloom_8G_limit_16G,redb,lmdb,lmdb_32G_mem,redb_32G_mem\n1439.96,1922.29,1966.31,1683.00,361.87,373.67,1638.86\n1536.81,2272.61,2246.28,2447.16,1072.84,1085.30,2383.20\n1546.46,2414.08,2402.10,2849.45,1458.25,1489.25,2780.79\n1625.86,2615.31,2624.00,3026.56,1643.86,1676.94,2960.31\n1647.39,2703.34,2715.03,3305.78,1778.90,1798.18,3263.37\n1738.31,2788.51,2813.04,3481.44,1839.90,1879.53,3428.16\n1682.64,2899.71,2991.80,3546.75,1876.40,1886.63,3454.48\n1629.90,2468.24,2464.63,3634.78,1903.89,1925.31,3585.98\n1694.46,3012.46,3023.43,3757.42,1925.84,1949.08,3714.67\n1670.97,2706.57,2684.02,3880.02,1993.19,2015.52,3829.20\n1643.46,3068.67,2987.47,3959.19,2049.00,2053.15,3945.15\n1715.93,2768.80,2748.64,3989.23,2085.23,2102.02,3964.63\n1691.15,2999.94,2986.31,4032.77,2110.84,2120.49,4031.62\n1672.81,3223.61,3133.86,4073.98,2157.48,2152.39,4047.52\n1744.41,3097.57,3011.53,4131.12,2139.70,2154.42,4084.23\n1695.30,3098.68,2927.48,4191.01,2192.85,2165.02,4096.89\n1706.08,2946.71,3096.30,4245.90,2194.76,2198.44,4184.23\n1674.31,3186.23,3121.30,4273.34,2238.35,2284.22,4250.58\n1719.34,3115.37,3108.79,4361.53,2312.12,2341.07,4286.55\n1738.39,3140.21,3013.48,4400.70,2426.99,2404.24,4341.03\n1747.36,3252.51,3101.92,4392.64,2505.18,2488.95,4384.80\n1741.98,3124.06,3103.17,4450.92,2570.26,2548.09,4387.39\n1741.52,3398.37,3050.98,4468.57,2633.39,2625.27,4432.24\n1713.82,3139.05,3214.49,4504.71,2665.94,2680.42,4375.92\n1746.24,3271.14,2909.15,4449.12,2702.77,2702.41,4425.48\n1732.02,3151.70,2931.04,4534.38,2755.70,2742.82,4478.72\n1767.08,3224.23,2900.58,4505.72,2739.77,2741.52,4494.67\n1753.01,3347.52,2639.81,4516.72,2757.61,2790.25,4511.23\n1738.42,3171.19,2786.91,4518.73,2777.16,2767.22,4512.05\n1709.60,3444.30,2735.59,4545.71,2773.45,2768.36,4535.31\n1790.99,3310.41,2722.08,4593.61,2795.49,2779.10,4571.16\n1754.93,3334.16,2715.33,4626.25,2786.18,2916.87,4587.33\n1760.33,3377.99,2834.07,4640.14,2821.28,2828.41,4621.65\n1768.92,3266.96,2708.19,4677.09,2869.88,2867.84,4670.61\n1756.54,3471.19,2800.78,4695.41,2925.21,2985.94,4668.95\n1803.41,3395.76,2834.27,4716.14,2941.64,2959.79,4703.46\n1765.97,3319.06,2689.68,4721.86,2990.76,3088.22,4725.01\n1768.19,3572.46,2812.48,4787.10,3040.83,3121.60,5020.84\n1810.26,3583.46,2809.07,4794.39,3118.66,3241.19,4783.74\n1719.59,3738.70,2788.34,4776.35,3165.90,3303.17,4840.05\n1834.95,3703.74,2821.23,4797.73,3195.00,3361.42,4881.19\n1758.89,3491.05,3022.64,4839.33,3241.32,3454.20,4881.47\n1775.92,3415.09,2913.23,4856.85,3297.68,3486.47,4845.19\n1798.93,3162.89,2815.63,4868.78,3312.25,3555.96,4871.40\n1829.00,3225.56,2776.54,4862.64,3369.68,3618.89,4982.03\n1757.31,3181.18,2797.80,4906.40,3367.54,3719.99,4910.11\n1852.40,3062.65,2642.19,4909.40,3399.30,3806.91,5025.48\n1824.35,3265.02,2741.24,4881.72,3437.02,4000.05,5346.04\n1742.08,3037.98,2866.04,4910.70,3454.70,4144.67,5372.61\n1789.55,3198.60,2765.77,4931.91,3449.92,4260.68,5691.74\n1745.39,3323.24,2753.76,4922.15,3464.81,4347.79,5764.98\n1756.68,3304.51,2866.48,4967.42,3485.55,4309.89,5860.35\n1750.57,3065.55,2856.69,4954.72,3519.81,4345.26,6023.06\n1474.59,3259.13,2637.72,4963.92,3500.27,4272.73,5983.03\n1681.41,3171.44,2674.55,4959.33,3495.80,4356.18,6085.14\n1804.87,3297.52,2699.69,4981.62,3523.99,4233.68,6089.94\n1830.04,3095.23,2836.63,4951.95,3524.08,4248.90,6182.85\n1792.76,3231.37,2767.51,5023.44,3509.46,4296.86,6184.37\n1785.65,3276.94,2736.62,4998.74,3541.49,4215.17,6199.58\n1877.28,3352.38,2761.82,4984.56,3530.68,4298.56,6161.85\n1795.67,3045.28,2783.83,5024.44,3542.61,4260.57,6227.71\n1818.67,3366.73,2716.60,5020.14,3596.24,4279.89,6208.60\n1829.75,3090.48,2640.79,5020.56,3568.87,4359.98,5940.92\n1793.88,3318.72,2677.42,5054.60,3572.29,4322.77,5873.94\n1855.85,3219.58,2635.70,5044.00,3588.29,4357.30,5649.37\n1856.75,3129.28,2850.29,5077.59,3584.98,4377.76,5645.75\n1849.60,3043.06,2813.49,5087.71,3596.53,4408.50,5640.34\n1860.53,3360.97,2926.70,5068.53,3619.85,4472.46,5750.73\n1652.25,3137.93,3109.69,5104.40,3612.35,4617.64,5721.89\n1852.48,3236.54,2707.82,5119.65,3652.03,4570.64,5740.80\n1778.85,3136.79,2533.91,5007.16,3671.35,4626.31,5746.25\n1813.91,3016.44,3053.77,4969.41,3682.00,4636.52,5859.52\n1844.44,3172.90,2955.44,5018.13,3679.72,4644.83,5824.08\n1795.33,3171.61,2965.24,5260.67,3706.78,4656.67,5932.15\n1771.38,3218.96,2720.05,5330.51,3738.64,4695.68,5948.57\n1922.79,3010.07,2499.57,5283.31,3772.47,4785.53,6086.64\n1666.44,3022.40,2479.56,5276.89,3793.60,4771.85,6027.08\n1831.71,3137.24,2755.75,5295.29,3812.76,4829.74,6241.53\n1828.24,3205.61,2371.75,5345.60,3811.09,4801.36,6621.02\n1735.43,3051.18,2691.88,5242.70,3837.78,4928.20,6257.86\n1774.05,2927.60,2784.19,5364.45,3869.96,4969.46,6402.90\n1763.27,2957.74,2754.81,5356.31,3884.02,4952.19,6665.77\n1793.03,3191.72,2368.90,5369.58,3910.59,5042.59,5977.78\n1768.25,2958.34,2693.41,5339.10,3901.50,5001.20,5878.54\n1795.00,2996.69,2597.11,5388.20,3904.19,5014.16,6151.58\n1835.84,2942.92,2504.82,5414.21,3930.08,5052.20,6081.42\n1750.14,3012.38,2521.19,5488.06,3935.36,5085.07,6168.82\n1688.98,2961.58,2711.98,5528.46,3933.34,5108.49,6276.41\n1729.73,2954.30,2540.65,5525.17,4005.71,5142.23,6322.14\n1688.93,3010.36,2369.36,5533.49,4057.78,5226.55,6343.98\n1571.21,2975.85,2671.15,5489.36,4019.50,5250.52,6335.60\n1670.34,2762.02,2584.16,5578.09,4034.32,5208.94,6399.68\n1490.26,2992.61,2423.25,5659.98,4041.23,5300.79,6953.69\n1479.60,3057.86,2663.53,5675.80,4102.85,5248.17,6940.45\n1580.57,3045.96,2504.68,5634.97,4173.37,5280.39,6474.40\n1769.00,2864.55,2444.33,5606.79,4202.64,5376.70,6527.23\n1776.60,2801.71,2425.95,5600.19,4250.17,5441.84,6473.00\n1788.90,3123.58,2406.74,5636.89,4327.80,5381.64,6487.46\n1785.74,3123.00,2408.09,5636.77,4316.73,5315.39,6490.44\n1762.11,2995.33,2495.60,5655.41,4348.53,5422.91,6612.82";

  var DARK_COLORS = {
    rocksdb:              { line: '#ef4444', fill: 'rgba(239,68,68,0.06)' },
    rocksdb_bloom:        { line: '#f97316', fill: 'rgba(249,115,22,0.06)' },
    rocksdb_bloom_8G_limit_16G:    { line: '#f97316', fill: 'rgba(249,115,22,0.06)' },
    lmdb:                 { line: '#22c55e', fill: 'rgba(34,197,94,0.06)' },
    lmdb_32G_mem:             { line: '#22c55e', fill: 'rgba(34,197,94,0.06)' },
    redb:                 { line: '#3b82f6', fill: 'rgba(59,130,246,0.06)' },
    redb_32G_mem:             { line: '#3b82f6', fill: 'rgba(59,130,246,0.06)' }
  };
  
  var LIGHT_COLORS = {
    rocksdb:              { line: '#dc2626', fill: 'rgba(220,38,38,0.08)' },
    rocksdb_bloom:        { line: '#ea580c', fill: 'rgba(234,88,12,0.08)' },
    rocksdb_bloom_8G_limit_16G:    { line: '#ea580c', fill: 'rgba(234,88,12,0.08)' },
    lmdb:                 { line: '#16a34a', fill: 'rgba(22,163,74,0.08)' },
    lmdb_32G_mem:             { line: '#16a34a', fill: 'rgba(22,163,74,0.08)' },
    redb:                 { line: '#2563eb', fill: 'rgba(37,99,235,0.08)' },
    redb_32G_mem:             { line: '#2563eb', fill: 'rgba(37,99,235,0.08)' }
  };
  
  var SERIES_META = {
    rocksdb:              { label: 'RocksDB',              dash: [],     defaultVisible: true },
    rocksdb_bloom:        { label: 'RocksDB + Bloom',      dash: [],     defaultVisible: true },
    rocksdb_bloom_8G_limit_16G:    { label: 'RocksDB + Bloom / 16G',dash: [6, 3], defaultVisible: false },
    lmdb:                 { label: 'LMDB',                 dash: [],     defaultVisible: true },
    lmdb_32G_mem:             { label: 'LMDB / 32G',           dash: [6, 3], defaultVisible: false },
    redb:                 { label: 'redb',                  dash: [],     defaultVisible: true },
    redb_32G_mem:             { label: 'redb / 32G',            dash: [6, 3], defaultVisible: false },
  };
 
  var SERIES_KEYS = Object.keys(SERIES_META);
  var SERIES_CONFIG = {};
 
  function getTheme() {
    return document.documentElement.getAttribute('data-mode') ||
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
 
  function updateColors() {
    var colors = getTheme() === 'light' ? LIGHT_COLORS : DARK_COLORS;
    SERIES_KEYS.forEach(function(k) {
      SERIES_CONFIG[k] = {
        line: colors[k].line,
        fill: colors[k].fill,
        label: SERIES_META[k].label,
        dash: SERIES_META[k].dash
      };
    });
  }
 
  function parseCSV(csv) {
    var lines = csv.split('\n');
    var headers = lines[0].split(',');
    var d = {};
    headers.forEach(function(h) { d[h] = []; });
    for (var i = 1; i < lines.length; i++) {
      var vals = lines[i].split(',').map(Number);
      headers.forEach(function(h, j) { d[h].push(vals[j]); });
    }
    return d;
  }
 
  var datasets = { write: parseCSV(WRITE_CSV), neg_read: parseCSV(NEGATIVE_READ_CSV) };
  var activeTab = 'write';
  var visible = {};
  SERIES_KEYS.forEach(function(k) { visible[k] = SERIES_META[k].defaultVisible; });
 
  var wrap = document.getElementById('benchWrap');
  var canvas = document.getElementById('benchCanvas');
  var ctx = canvas.getContext('2d');
  var tooltipEl = document.getElementById('benchTooltip');
  var pad = { top: 10, right: 20, bottom: 30, left: 65 };
 
  function applyTheme() {
    var t = getTheme();
    if (t === 'light') {
      wrap.classList.add('bench-light');
    } else {
      wrap.classList.remove('bench-light');
    }
    updateColors();
    buildLegend();
    draw();
    renderStats();
  }
 
  function buildLegend() {
    var el = document.getElementById('benchLegend');
    el.innerHTML = SERIES_KEYS.map(function(k) {
      var c = SERIES_CONFIG[k];
      var cls = visible[k] ? '' : ' dimmed';
      return '<div class="bench-legend-item' + cls + '" data-series="' + k + '">' +
        // '<div class="bench-legend-dot" style="background:' + c.line + '"></div>' + c.label + '</div>';
        '<svg width="20" height="10"><line x1="0" y1="5" x2="20" y2="5" stroke="' + c.line + '" stroke-width="2" stroke-dasharray="' + (SERIES_META[k].dash.length ? SERIES_META[k].dash.join(',') : '0') + '"/></svg>' +
        c.label + '</div>';
    }).join('');
    el.querySelectorAll('.bench-legend-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var s = this.getAttribute('data-series');
        visible[s] = !visible[s];
        buildLegend();
        draw();
        renderStats();
      });
    });
  }
 
  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    var w = rect.width - 56;
    canvas.width = w * window.devicePixelRatio;
    canvas.height = 450 * window.devicePixelRatio;
    canvas.style.width = w + 'px';
    canvas.style.height = '450px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
 
  function getData() { return datasets[activeTab]; }
 
  function getVisibleMax() {
    var data = getData();
    var max = 0;
    SERIES_KEYS.forEach(function(k) {
      if (!visible[k] || !data[k]) return;
      data[k].forEach(function(v) { if (v > max) max = v; });
    });
    return max;
  }
 
  function niceMax(val) {
    var mag = Math.pow(10, Math.floor(Math.log10(val)));
    var norm = val / mag;
    if (norm <= 1) return mag;
    if (norm <= 2) return 2 * mag;
    if (norm <= 5) return 5 * mag;
    return 10 * mag;
  }
 
  function fmt(val) {
    return val >= 1000 ? (val / 1000).toFixed(2) + ' \u00b5s' : val.toFixed(1) + ' ns';
  }
 
  function fmtHtml(val) {
    return val >= 1000
      ? (val / 1000).toFixed(2) + ' <span class="bench-stat-unit">\u00b5s</span>'
      : val.toFixed(0) + ' <span class="bench-stat-unit">ns</span>';
  }
 
  function getStyleVar(name) {
    return getComputedStyle(wrap).getPropertyValue(name).trim();
  }
 
  function draw(hoverIdx) {
    var data = getData();
    var w = canvas.width / window.devicePixelRatio;
    var h = canvas.height / window.devicePixelRatio;
    ctx.clearRect(0, 0, w, h);
 
    var plotW = w - pad.left - pad.right;
    var plotH = h - pad.top - pad.bottom;
    var n = data[SERIES_KEYS[0]].length;
    var maxVal = niceMax(getVisibleMax() * 1.08);
 
    var gridColor = getStyleVar('--bench-grid');
    var axisColor = getStyleVar('--bench-axis');
    var crosshair = getStyleVar('--bench-crosshair');
    var dotStroke = getStyleVar('--bench-dot-stroke');
 
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    ctx.font = '11px JetBrains Mono';
    ctx.fillStyle = axisColor;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
 
    var gridLines = 6;
    for (var i = 0; i <= gridLines; i++) {
      var y = pad.top + plotH - (i / gridLines) * plotH;
      var val = (i / gridLines) * maxVal;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(w - pad.right, y);
      ctx.stroke();
      ctx.fillText(val >= 1000 ? (val / 1000).toFixed(1) + '\u00b5s' : val.toFixed(0) + 'ns', pad.left - 8, y);
    }
 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    var xStep = Math.ceil(n / 10);
    for (var i = 0; i < n; i += xStep) {
      ctx.fillText(i, pad.left + (i / (n - 1)) * plotW, pad.top + plotH + 8);
    }
 
    var sorted = SERIES_KEYS.filter(function(k) { return visible[k] && data[k]; }).sort(function(a, b) {
      var avgA = data[a].reduce(function(s, v) { return s + v; }, 0) / data[a].length;
      var avgB = data[b].reduce(function(s, v) { return s + v; }, 0) / data[b].length;
      return avgB - avgA;
    });
 
    sorted.forEach(function(key) {
      var vals = data[key];
      var cfg = SERIES_CONFIG[key];
 
      ctx.beginPath();
      ctx.moveTo(pad.left, pad.top + plotH);
      for (var i = 0; i < vals.length; i++) {
        ctx.lineTo(pad.left + (i / (n - 1)) * plotW, pad.top + plotH - (vals[i] / maxVal) * plotH);
      }
      ctx.lineTo(pad.left + ((vals.length - 1) / (n - 1)) * plotW, pad.top + plotH);
      ctx.closePath();
      ctx.fillStyle = cfg.fill;
      ctx.fill();
 
      ctx.beginPath();
      ctx.setLineDash(cfg.dash);
      for (var i = 0; i < vals.length; i++) {
        var x = pad.left + (i / (n - 1)) * plotW;
        var y = pad.top + plotH - (vals[i] / maxVal) * plotH;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = cfg.line;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);
    });
 
    if (hoverIdx !== undefined && hoverIdx >= 0 && hoverIdx < n) {
      var canvasX = pad.left + (hoverIdx / (n - 1)) * plotW;
      ctx.beginPath();
      ctx.moveTo(canvasX, pad.top);
      ctx.lineTo(canvasX, pad.top + plotH);
      ctx.strokeStyle = crosshair;
      ctx.lineWidth = 1;
      ctx.stroke();
 
      SERIES_KEYS.forEach(function(key) {
        if (!visible[key] || !data[key]) return;
        var y = pad.top + plotH - (data[key][hoverIdx] / maxVal) * plotH;
        ctx.beginPath();
        ctx.arc(canvasX, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = SERIES_CONFIG[key].line;
        ctx.fill();
        ctx.strokeStyle = dotStroke;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }
  }
 
  function renderStats() {
    var data = getData();
    var el = document.getElementById('benchStats');
    var html = '';
    SERIES_KEYS.forEach(function(key) {
      if (!visible[key] || !data[key]) return;
      var vals = data[key];
      var avg = vals.reduce(function(a, b) { return a + b; }, 0) / vals.length;
      var min = Math.min.apply(null, vals);
      var max = Math.max.apply(null, vals);
      var cfg = SERIES_CONFIG[key];
      html += '<div class="bench-stat-card">' +
        '<div class="bench-stat-label" style="color:' + cfg.line + '">' + cfg.label + '</div>' +
        '<div class="bench-stat-value" style="color:' + cfg.line + '">' + fmtHtml(avg) + '</div>' +
        '<div class="bench-stat-detail">min ' + fmtHtml(min) + ' \u00b7 max ' + fmtHtml(max) + '</div>' +
        '</div>';
    });
    el.innerHTML = html;
  }
 
  // Tab switching
  var tabIds = {
    benchTabWrite: 'write',
    benchTabNegRead: 'neg_read',
    // benchTabPosRead: 'pos_read'
  };
  
  Object.keys(tabIds).forEach(function(id) {
    document.getElementById(id).addEventListener('click', function() {
      activeTab = tabIds[id];
      Object.keys(tabIds).forEach(function(tid) {
        document.getElementById(tid).classList.remove('active');
      });
      this.classList.add('active');
      draw();
      renderStats();
    });
  });
  // document.getElementById('benchTabRead').addEventListener('click', function() {
  //   activeTab = 'read';
  //   document.getElementById('benchTabRead').classList.add('active');
  //   document.getElementById('benchTabWrite').classList.remove('active');
  //   draw();
  //   renderStats();
  // });
 
  // document.getElementById('benchTabWrite').addEventListener('click', function() {
  //   activeTab = 'write';
  //   document.getElementById('benchTabWrite').classList.add('active');
  //   document.getElementById('benchTabRead').classList.remove('active');
  //   draw();
  //   renderStats();
  // });
 
  // Tooltip
  canvas.addEventListener('mousemove', function(e) {
    var data = getData();
    var rect = canvas.getBoundingClientRect();
    var mx = e.clientX - rect.left;
    var w = rect.width;
    var plotW = w - pad.left - pad.right;
    var n = data[SERIES_KEYS[0]].length;
 
    var idx = Math.round(((mx - pad.left) / plotW) * (n - 1));
    if (idx < 0 || idx >= n) { tooltipEl.style.opacity = 0; draw(); return; }
 
    var html = '<div class="bench-tooltip-header">Sample #' + idx + '</div>';
    SERIES_KEYS.forEach(function(key) {
      if (!visible[key] || !data[key]) return;
      var cfg = SERIES_CONFIG[key];
      html += '<div class="bench-tooltip-row">' +
        '<div class="bench-tooltip-dot" style="background:' + cfg.line + '"></div>' +
        '<span class="bench-tooltip-label">' + cfg.label + '</span>' +
        '<span class="bench-tooltip-value">' + fmt(data[key][idx]) + '</span></div>';
    });
    tooltipEl.innerHTML = html;
 
    var tx = e.clientX - rect.left + 16;
    var ty = e.clientY - rect.top - 20;
    tooltipEl.style.left = (tx + tooltipEl.offsetWidth > rect.width ? tx - tooltipEl.offsetWidth - 32 : tx) + 'px';
    tooltipEl.style.top = ty + 'px';
    tooltipEl.style.opacity = 1;
 
    draw(idx);
  });
 
  canvas.addEventListener('mouseleave', function() {
    tooltipEl.style.opacity = 0;
    draw();
  });
 
  // Watch Chirpy theme toggle
  new MutationObserver(applyTheme).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-mode']
  });
 
  // Init
  updateColors();
  applyTheme();
  resize();
  draw();
  renderStats();
  window.addEventListener('resize', function() { resize(); draw(); });
})();
