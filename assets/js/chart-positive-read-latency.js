(function() {
  var POSITIVE_READ_CSV = "rocksdb_16G,rocksdb_64G,lmdb_64G,lmdb_16G,lmdb_32G,redb_64G,redb_32G,redb_16G,redb_8G,redb_1G,rocksdb_1G,lmdb_1G\n93973.99,113802.39,418515.58,370715.09,71524.96,144184.03,144122.09,144229.17,144176.27,145775.25,146217.04,622648.35\n104948.66,91400.46,273229.17,335582.98,57298.17,118525.17,118508.29,118534.21,118566.89,124594.44,144265.20,627445.88\n115890.73,90626.35,206417.89,315603.27,47694.13,104694.17,104763.68,104737.66,104710.55,121378.92,142531.04,627945.65\n84646.78,92777.14,126011.51,311272.14,49180.61,95071.39,95179.80,95146.82,95176.40,121036.16,140624.35,627381.18\n88961.30,90087.20,115748.19,354200.28,49783.27,88209.78,88290.04,88251.14,88290.73,120949.31,139337.87,626511.94\n96949.64,82225.66,77178.24,342077.25,50546.32,83585.15,83631.49,83591.77,83696.84,121006.58,138170.92,627348.86\n84236.81,103797.76,68591.27,338006.45,52055.28,80220.91,80208.72,80196.80,80285.12,120997.67,137159.59,627435.52\n73088.61,94601.87,67295.12,308865.85,65069.72,77594.13,77654.90,77625.04,77716.45,121082.51,136452.01,627605.54\n73142.83,92687.19,58859.56,307599.76,56715.82,75720.57,75769.16,75741.70,75815.04,121075.88,136128.62,626872.80\n111112.16,96980.28,66135.32,357137.36,51267.19,74294.58,74441.17,74307.50,74351.48,120835.80,135805.84,627524.71\n84789.62,71260.35,42976.02,343017.12,45346.41,73098.25,73880.61,73128.28,73173.64,121185.67,135317.19,628790.68\n66964.74,72309.57,38033.02,300045.81,39598.78,72387.02,72482.29,72429.75,72464.89,121130.10,134766.84,627285.98\n66364.02,73433.89,37431.38,349752.77,36638.74,71593.27,71608.94,71599.83,71647.60,121162.52,133748.45,627321.65\n78426.43,79436.87,46536.63,347581.15,43035.67,70641.64,70698.78,70653.61,70720.54,121080.11,130422.43,627248.48\n70767.06,68209.03,34345.01,343315.08,44284.76,69995.93,69979.55,69962.60,70006.24,121141.76,130205.32,628335.33\n71225.40,67434.77,34274.75,312688.63,37214.45,69593.38,69639.77,69543.34,70364.13,121230.50,129854.17,627392.84\n62602.81,74038.95,33686.68,336173.35,37773.38,68967.59,69006.08,68944.33,71169.78,121309.73,129765.63,627263.24\n63919.29,73871.12,34031.34,344116.71,39897.52,68341.15,68448.01,68392.97,70936.60,121087.88,129517.02,627658.11\n93446.35,70496.71,34230.63,336064.30,39666.70,67849.40,67949.28,67883.91,70712.11,121231.10,129348.89,631511.94\n86985.82,81483.02,34440.74,348259.12,38922.12,67262.98,67384.90,67303.76,70514.67,120964.16,129386.72,631688.26\n64953.73,69101.59,34666.03,340224.55,39737.62,66926.57,66999.76,66947.78,70505.94,121125.69,129168.23,629889.89\n64731.38,54192.50,40067.14,325207.63,49314.88,66457.01,66526.93,66441.16,70270.98,121138.21,128921.71,630640.06\n73073.33,54585.14,53599.66,335461.75,52020.69,65934.35,65963.87,65921.04,70146.21,120958.43,129056.26,629944.84\n73920.40,54457.35,34080.37,306838.38,39925.73,65384.67,65382.00,65365.21,70012.65,121555.17,128914.52,630649.84\n72486.28,68806.22,34575.67,331062.41,40563.43,65196.57,65232.05,65201.94,70125.11,121291.16,129907.47,634039.10\n63436.46,56959.26,34054.03,360139.82,41371.57,64541.97,64586.63,64514.29,69957.36,120974.55,128574.23,634928.75\n62097.87,53112.99,33244.97,332731.78,42984.30,63876.20,63929.23,63897.51,69813.46,121447.64,128737.28,630837.78\n91490.97,57778.54,30952.50,306518.81,43125.12,63624.15,63670.75,63619.75,69939.96,121201.79,128349.68,629242.65\n76970.76,63302.66,30092.32,336745.25,43020.82,63235.32,63286.45,63236.53,69925.41,120935.37,128356.09,628440.47\n66061.41,70797.22,30393.39,344356.26,74207.81,62951.59,62968.02,62950.95,70064.44,121235.97,128480.77,629152.87\n54886.59,67141.54,30780.74,342788.17,43832.51,62256.00,62270.68,62240.49,69931.87,121963.81,128430.91,630716.13\n56351.17,70049.00,48834.07,334106.93,44020.29,61981.29,61966.20,61934.27,69988.56,121216.33,128135.30,630322.10\n57826.47,81642.45,30678.41,341747.00,44674.39,61391.29,61424.31,61365.74,69947.24,121243.05,127786.90,630764.47\n82181.46,52876.72,30493.95,322945.47,46175.02,60979.87,61026.54,60981.57,69960.89,121094.63,127840.39,630907.73\n62476.85,53112.55,30496.06,355955.99,47905.31,60526.77,60587.73,60549.47,70040.46,121149.23,129234.99,630630.57\n57679.66,52565.30,30306.95,295765.23,48843.53,60084.79,60118.91,60065.38,69975.28,121164.11,128082.51,630367.41\n56055.00,55628.77,29332.33,320395.72,78691.44,59778.53,59834.50,59782.46,70016.69,121134.23,127838.90,630504.10\n65035.85,70685.92,27812.41,337788.23,51315.88,59027.77,59109.59,59077.68,69855.17,120892.15,127836.98,631355.23\n78573.75,62904.73,35077.72,338964.49,53076.52,58750.88,58790.22,59076.44,70077.52,121283.66,127950.23,630929.63\n83545.22,54054.70,27735.16,343229.45,53880.88,58223.79,58259.04,59217.70,69895.71,120885.64,127998.70,631258.51\n74664.79,56471.08,27736.20,341034.74,55964.28,58045.10,58042.64,59441.52,69997.09,120911.66,127765.43,631533.31\n57149.90,66648.92,30111.94,328880.88,57526.70,57444.59,57494.46,59316.38,69983.15,121114.35,127410.58,630503.90\n57488.12,63993.68,28915.61,330674.55,93286.07,57070.57,57128.47,59357.21,69860.11,120753.75,127674.63,629962.14\n62635.71,62535.66,29619.55,337527.55,59035.73,56686.39,56707.09,59290.62,70023.69,120797.49,127887.82,630252.07\n66898.67,76912.78,30037.93,327829.01,71704.29,56289.68,56297.55,59423.58,69998.09,120854.48,127616.91,630509.81\n68638.57,72936.00,30253.78,348867.36,99688.67,55833.51,55851.45,59337.89,69967.10,120751.42,127591.52,631169.16\n57043.35,54693.15,30944.63,315345.62,60108.49,55256.14,55371.43,59153.90,69806.82,120717.51,127797.58,630868.08\n55262.91,53144.30,31358.58,363698.62,66476.05,55013.30,55037.27,59380.05,69799.79,120819.29,127633.24,630434.69\n58739.93,54993.72,32364.58,306010.00,65871.98,54394.32,54428.88,59229.67,70002.41,120815.38,127420.90,630806.62\n68395.92,78196.43,32838.38,367284.07,74502.25,54321.84,54351.80,59491.04,69932.09,120993.62,127393.29,631052.65\n84326.06,59795.03,44979.37,294864.02,86455.74,53806.96,53809.56,59479.94,69965.86,120978.95,127628.81,630973.58\n70119.86,61931.65,38884.81,355214.28,72125.62,53364.55,53405.59,59379.10,69983.88,121094.61,127438.90,631174.23\n57659.63,58127.44,28159.03,319882.61,73322.28,52914.71,52960.98,59381.92,69835.25,120764.67,127417.41,631508.71\n57868.88,58869.91,26382.58,336725.22,77740.58,52440.00,52494.20,59458.05,69861.93,120902.15,127601.72,629906.66\n62310.83,73801.44,26232.35,341145.21,108474.81,52098.18,52155.26,59395.46,69822.44,120638.09,127427.46,630915.90\n65493.31,66799.31,26560.58,334212.39,96283.72,51647.61,51698.68,59330.89,69776.56,121211.13,127210.54,630844.73\n54117.94,67063.99,26580.14,352203.35,135612.60,51288.49,51367.50,59457.34,69987.46,120700.78,127501.78,631518.65\n72981.72,86911.24,27244.10,345203.24,82306.01,50902.78,50924.26,59415.48,69872.38,120869.42,127433.51,630160.93\n65863.45,67936.55,31675.75,346191.01,82180.34,50363.61,50434.98,59389.54,69887.34,120790.67,127342.57,630789.99\n55082.20,64576.46,39869.48,332665.71,82384.61,50215.88,50281.06,59505.92,69997.16,121028.00,127526.40,630705.96\n67123.70,66039.78,28632.49,311011.72,113074.76,49630.11,49698.43,59419.57,69890.38,120674.61,127566.31,631323.15\n68569.59,79878.33,28375.57,353212.32,86783.99,49394.61,49434.97,59493.05,69860.83,120740.11,127494.91,630157.68\n86782.34,67022.04,28108.16,351373.53,88379.73,49018.24,49044.79,59458.91,69964.10,120795.45,127399.40,630482.42\n57823.00,59841.50,26168.02,349360.56,87710.40,48614.57,48631.47,59592.70,69897.87,120594.88,127402.38,631504.52\n57177.34,63892.55,37510.56,316527.92,92437.24,48131.93,48202.22,59331.37,69982.24,120783.31,127281.89,630730.65\n51726.66,83923.27,25452.72,327899.39,120065.87,47670.29,47724.30,59584.14,69882.57,121017.10,127214.28,631231.05\n53348.06,56549.70,25544.32,356168.41,120858.25,47139.49,47220.76,59288.40,69822.94,120824.90,127427.49,630826.88\n73109.04,53861.67,25795.36,326996.46,87262.02,47055.70,47165.36,59436.16,69814.48,121108.63,127211.59,631415.21\n66399.47,92990.21,26080.88,303010.52,98140.16,46707.84,46787.15,59572.54,69882.87,120675.34,127137.43,630778.11\n69326.01,59590.97,26473.54,354747.27,90300.00,46143.94,46225.46,59475.30,69775.71,120657.94,126961.33,631138.94\n60458.25,59153.99,26379.98,349489.63,98720.34,45918.50,45978.22,59393.34,70017.52,120750.68,127097.72,630834.88\n56590.75,58220.39,26771.02,352838.26,87954.15,45525.96,45551.36,59552.95,69921.04,120778.56,127449.30,631198.20\n57715.07,57305.30,27022.80,317991.81,90503.41,45174.62,45204.32,59488.59,69868.00,120615.69,127272.86,630573.95\n82936.93,56642.56,26996.45,327925.58,101089.14,44777.58,44787.16,59483.29,69899.66,120629.31,127254.57,630634.57\n67125.20,81242.28,27882.12,360730.93,113414.96,44549.22,44586.09,59515.37,70005.45,120711.65,127444.55,631293.87\n68035.21,59026.47,51801.86,330506.10,89936.31,44050.15,44072.70,59534.68,69876.64,120759.29,127088.89,631011.89\n65352.66,60166.22,29772.14,330593.80,126135.91,43666.70,43739.66,59501.55,69918.15,120814.70,127135.50,630649.03\n57560.21,56172.59,28115.32,307634.08,87031.62,43587.32,43671.86,59708.18,70034.67,120831.92,127165.32,632285.50\n54715.81,58095.11,27326.21,353686.65,107168.27,42886.13,42959.78,59602.44,69945.32,120752.29,127300.61,631164.87\n62321.51,76905.43,25007.60,326668.65,94912.21,42711.24,42807.09,59781.45,69957.77,120636.78,127131.74,631057.31\n80314.15,53386.72,24653.09,348298.87,81521.34,42089.96,42145.84,59617.05,69931.47,120972.91,126944.86,631157.60\n66723.35,51899.30,24800.99,319111.08,79689.54,41732.98,41763.94,59721.47,69984.70,120787.74,127183.05,631080.45\n62806.11,59413.80,24894.15,350953.76,100563.71,41514.20,41521.07,59698.34,69952.56,120755.76,126755.39,630256.73\n64699.99,52029.94,25111.40,340826.56,92470.49,40932.96,40969.88,59487.24,69814.38,120860.98,126910.43,630804.53\n64422.64,50716.92,29540.25,333358.63,80205.84,40730.58,40761.42,59562.42,69948.59,120921.53,127233.87,630723.21\n78777.08,50851.68,43601.33,347201.03,79817.38,40389.61,40427.08,59591.07,69997.80,121080.25,126787.70,631319.56\n78642.34,50601.59,25729.48,295279.28,83044.78,40022.86,40046.70,59612.56,70003.98,120220.77,127181.86,630921.47\n63496.23,50430.91,25818.87,295097.15,113997.95,39608.22,39651.02,59478.55,69807.21,120666.88,127102.69,630577.61\n72429.14,69179.12,25515.71,294165.97,104484.18,39561.82,39605.97,59668.70,69887.15,122637.77,127116.58,630943.94\n63368.30,55503.43,25724.98,295473.78,98992.14,38952.21,38990.47,59622.87,69869.80,120930.83,126854.33,630462.86\n61259.84,57068.07,26190.60,295011.67,97794.17,38679.29,39004.68,59448.93,69823.32,122975.52,126825.43,631757.38\n74696.73,74946.12,25564.70,295279.47,71750.02,38031.94,38907.44,59387.67,69875.91,122108.66,126748.37,631639.05\n76509.80,58679.93,24543.59,294797.97,72053.80,37965.83,39242.47,59772.31,69889.40,120591.19,126848.43,630659.92\n78108.46,53004.88,23943.13,294954.23,73742.81,37630.37,39208.36,59715.40,70029.60,120800.40,127046.39,631114.26\n60211.09,52308.11,24421.97,295404.99,104008.99,36974.88,38953.78,59612.72,69980.32,120482.98,127002.16,631280.64\n65712.11,51729.02,24350.25,291273.97,70517.35,37121.46,39478.46,59620.59,69850.00,120435.64,127207.86,631024.81\n85135.88,51498.12,43356.96,293616.05,71030.77,36586.16,39259.78,59564.26,69848.13,120843.12,127122.66,631234.19\n63698.35,51461.89,26577.56,294007.13,72987.80,36328.32,39365.15,59681.83,69953.19,119716.79,127033.37,631535.71\n89132.37,73168.80,24901.81,294696.12,85670.58,36194.84,39533.88,59701.95,69939.98,119916.69,127166.23,631666.30\n76633.21,55199.58,24880.28,294195.43,90572.06,35589.63,39437.80,59587.53,69871.87,120044.67,126983.15,630962.00";

  var DARK_COLORS = {
    rocksdb_16G: { line: '#ef4444', fill: 'rgba(239,68,68,0.06)' },
    rocksdb_64G: { line: '#ef4444', fill: 'rgba(239,68,68,0.06)' },
    rocksdb_1G:  { line: '#ef4444', fill: 'rgba(239,68,68,0.06)' },
    lmdb_64G:    { line: '#22c55e', fill: 'rgba(34,197,94,0.06)' },
    lmdb_16G:    { line: '#22c55e', fill: 'rgba(34,197,94,0.06)' },
    lmdb_32G:    { line: '#22c55e', fill: 'rgba(34,197,94,0.06)' },
    lmdb_1G:     { line: '#22c55e', fill: 'rgba(34,197,94,0.06)' },
    redb_64G:    { line: '#3b82f6', fill: 'rgba(59,130,246,0.06)' },
    redb_32G:    { line: '#3b82f6', fill: 'rgba(59,130,246,0.06)' },
    redb_16G:    { line: '#3b82f6', fill: 'rgba(59,130,246,0.06)' },
    redb_8G:     { line: '#3b82f6', fill: 'rgba(59,130,246,0.06)' },
    redb_1G:     { line: '#3b82f6', fill: 'rgba(59,130,246,0.06)' }
  };
  
  var LIGHT_COLORS = {
    rocksdb_16G: { line: '#dc2626', fill: 'rgba(220,38,38,0.08)' },
    rocksdb_64G: { line: '#dc2626', fill: 'rgba(220,38,38,0.08)' },
    rocksdb_1G:  { line: '#dc2626', fill: 'rgba(220,38,38,0.08)' },
    lmdb_64G:    { line: '#16a34a', fill: 'rgba(22,163,74,0.08)' },
    lmdb_16G:    { line: '#16a34a', fill: 'rgba(22,163,74,0.08)' },
    lmdb_32G:    { line: '#16a34a', fill: 'rgba(22,163,74,0.08)' },
    lmdb_1G:     { line: '#16a34a', fill: 'rgba(22,163,74,0.08)' },
    redb_64G:    { line: '#2563eb', fill: 'rgba(37,99,235,0.08)' },
    redb_32G:    { line: '#2563eb', fill: 'rgba(37,99,235,0.08)' },
    redb_16G:    { line: '#2563eb', fill: 'rgba(37,99,235,0.08)' },
    redb_8G:     { line: '#2563eb', fill: 'rgba(37,99,235,0.08)' },
    redb_1G:     { line: '#2563eb', fill: 'rgba(37,99,235,0.08)' }
  };
  
  var SERIES_META = {
    rocksdb_64G: { label: 'RocksDB / 64G',  dash: [],      defaultVisible: true },
    rocksdb_16G: { label: 'RocksDB / 16G',  dash: [6, 3],  defaultVisible: false },
    rocksdb_1G:  { label: 'RocksDB / 1G',   dash: [2, 2],  defaultVisible: false },
    lmdb_64G:    { label: 'LMDB / 64G',     dash: [],      defaultVisible: true },
    lmdb_32G:    { label: 'LMDB / 32G',     dash: [6, 3],  defaultVisible: false },
    lmdb_16G:    { label: 'LMDB / 16G',     dash: [4, 2],  defaultVisible: false },
    lmdb_1G:     { label: 'LMDB / 1G',      dash: [2, 2],  defaultVisible: false },
    redb_64G:    { label: 'redb / 64G',     dash: [],      defaultVisible: true },
    redb_32G:    { label: 'redb / 32G',     dash: [6, 3],  defaultVisible: false },
    redb_16G:    { label: 'redb / 16G',     dash: [4, 2],  defaultVisible: false },
    redb_8G:     { label: 'redb / 8G',      dash: [3, 2],  defaultVisible: false },
    redb_1G:     { label: 'redb / 1G',      dash: [2, 2],  defaultVisible: false }
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

  var data = parseCSV(POSITIVE_READ_CSV);
  var visible = {};
  SERIES_KEYS.forEach(function(k) { visible[k] = SERIES_META[k].defaultVisible; });

  var wrap = document.getElementById('bench2Wrap');
  var canvas = document.getElementById('bench2Canvas');
  var ctx = canvas.getContext('2d');
  var tooltipEl = document.getElementById('bench2Tooltip');
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
    var el = document.getElementById('bench2Legend');
    el.innerHTML = SERIES_KEYS.map(function(k) {
      var c = SERIES_CONFIG[k];
      var cls = visible[k] ? '' : ' dimmed';
      return '<div class="bench-legend-item' + cls + '" data-series="' + k + '">' +
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

  function getVisibleMax() {
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
    var el = document.getElementById('bench2Stats');
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

  canvas.addEventListener('mousemove', function(e) {
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

  new MutationObserver(applyTheme).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-mode']
  });

  // Init
  function init() {
    updateColors();
    applyTheme();
    resize();
    draw();
    renderStats();
  }

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }
  window.addEventListener('resize', function() { resize(); draw(); });
})();