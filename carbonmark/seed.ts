import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const carbonMarks = await Promise.all([
    prisma.carbonMark.create({
      data: {
        asset: 'EC0-114-2022',
        price: 15,
        wallet: 'https://polygonscan.com/address/0xa8853ffc5a0aeab7d31631a4b87cb12c0b289c6c',
        availableToken: 985,
        vintage: 2021,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'ECO-22-2018',
        price: 20,
        wallet: 'https://polygonscan.com/address/0x4b69a69a80048e321da1d751f0f9dc39b5d63454',
        availableToken: 988,
        vintage: 2018,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'VCS-786-2015',
        price: 1,
        wallet: 'https://polygonscan.com/address/0x314c0a010e148f1e1286f96f78ed366255267d54',
        availableToken: 50,
        vintage: 2015,
        status: 'Available',
      },
    }), prisma.carbonMark.create({
      data: {
        asset: 'TC02-VCS-985',
        price: 2,
        wallet: 'https://polygonscan.com/address/0xb00110cc12cdc8f666f33f4e52e4957ff594282f',
        availableToken: 7881,
        vintage: 2014,
        status: 'Available',
      },
    }), prisma.carbonMark.create({
      data: {
        asset: 'ICR-112-2019',
        price: 4,
        wallet: 'https://polygonscan.com/address/0xd016b2acece65612b93cc9aee763bda0c2b0e4c0',
        availableToken: 57,
        vintage: 2019,
        status: 'Available',
      },
    }), prisma.carbonMark.create({
      data: {
        asset: 'PUR-175613-2023',
        price: 210,
        wallet: 'https://polygonscan.com/address/0x9bbc1563fa8a2267ee0c846c591208160afb0b34',
        availableToken: 30,
        vintage: 2023,
        status: 'Available',
      },
    }), prisma.carbonMark.create({
      data: {
        asset: 'VCS-1764-2020',
        price: 41,
        wallet: 'https://polygonscan.com/address/0xfbc5d9620b6bb729be2f72fca157054bd3da3d1a',
        availableToken: 249,
        vintage: 2020,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'EC0-114-2022',
        price: 15,
        wallet: 'https://polygonscan.com/address/0xa8853ffc5a0aeab7d31631a4b87cb12c0b289c6c',
        availableToken: 985,
        vintage: 2021,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'ECO-22-2018',
        price: 20,
        wallet: 'https://polygonscan.com/address/0x4b69a69a80048e321da1d751f0f9dc39b5d63454',
        availableToken: 988,
        vintage: 2018,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'VCS-786-2015',
        price: 1,
        wallet: 'https://polygonscan.com/address/0x314c0a010e148f1e1286f96f78ed366255267d54',
        availableToken: 50,
        vintage: 2015,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'TC02-VCS-985',
        price: 2,
        wallet: 'https://polygonscan.com/address/0xb00110cc12cdc8f666f33f4e52e4957ff594282f',
        availableToken: 7881,
        vintage: 2014,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'ICR-112-2019',
        price: 4,
        wallet: 'https://polygonscan.com/address/0xd016b2acece65612b93cc9aee763bda0c2b0e4c0',
        availableToken: 57,
        vintage: 2019,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'PUR-175613-2023',
        price: 210,
        wallet: 'https://polygonscan.com/address/0x9bbc1563fa8a2267ee0c846c591208160afb0b34',
        availableToken: 30,
        vintage: 2023,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'VCS-1764-2020',
        price: 41,
        wallet: 'https://polygonscan.com/address/0xfbc5d9620b6bb729be2f72fca157054bd3da3d1a',
        availableToken: 249,
        vintage: 2020,
        status: 'Available',
      },
    }),

    // 13 new entries
    prisma.carbonMark.create({
      data: {
        asset: 'ICRO-2015-153',
        price: 12,
        wallet: 'https://polygonscan.com/address/0xa14b41a2f49eab8e7c1c8dd947207c6e45aefc23',
        availableToken: 450,
        vintage: 2015,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'TCO-1574-2016',
        price: 9,
        wallet: 'https://polygonscan.com/address/0x72bcee0f1c4d9a9caa3191c105f28ba65cb205da',
        availableToken: 600,
        vintage: 2016,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'VER-245-2021',
        price: 17,
        wallet: 'https://polygonscan.com/address/0xadd85af8df7a9415f7cfd735eb79a3a3ac2f5a68',
        availableToken: 450,
        vintage: 2021,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'CRB-1987-2019',
        price: 30,
        wallet: 'https://polygonscan.com/address/0xa8729bbca817e9b0f31be28fc143e275da5e4ea7',
        availableToken: 1200,
        vintage: 2019,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'VCS-981-2012',
        price: 8,
        wallet: 'https://polygonscan.com/address/0xb194582bd395f4f61a4820e407c89494b6fe365d',
        availableToken: 800,
        vintage: 2012,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'PUR-265-2017',
        price: 25,
        wallet: 'https://polygonscan.com/address/0xc0b0f38b6f0d4f9f650f40782cc3ddbd7cf0ef90',
        availableToken: 720,
        vintage: 2017,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'TCO2-998-2013',
        price: 3,
        wallet: 'https://polygonscan.com/address/0xe33a3bcb76050a22b2b98c987cb23342e5a13b1a',
        availableToken: 6000,
        vintage: 2013,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'GS-764-2022',
        price: 50,
        wallet: 'https://polygonscan.com/address/0xd167e056b57f55ad0f3bb0f710e7a964158e1d6f',
        availableToken: 400,
        vintage: 2022,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'EC-345-2010',
        price: 5,
        wallet: 'https://polygonscan.com/address/0xc9182faad5fb5f885c555e3aa8a5d20798f24b41',
        availableToken: 230,
        vintage: 2010,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'VCS-345-2020',
        price: 21,
        wallet: 'https://polygonscan.com/address/0xf85f05b83ad2b637d3c2ba4f7db59ff9f24387f3',
        availableToken: 500,
        vintage: 2020,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'TCO2-983-2011',
        price: 11,
        wallet: 'https://polygonscan.com/address/0xb21b84357f9737ed0f76fd3de6b41b7081a00db7',
        availableToken: 250,
        vintage: 2011,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'GS-873-2023',
        price: 28,
        wallet: 'https://polygonscan.com/address/0x8b47cb2ad710b4d7e4bbf81b4b3339bcf4ad2a23',
        availableToken: 670,
        vintage: 2023,
        status: 'Available',
      },
    }),
    prisma.carbonMark.create({
      data: {
        asset: 'EC-123-2009',
        price: 2,
        wallet: 'https://polygonscan.com/address/0xa9c5b0983b8c28dcb5f96b0c36c1dbf0f2b81db1',
        availableToken: 90,
        vintage: 2009,
        status: 'Available',
      },
    }),

  ]);

  console.log('Dummy data created:', carbonMarks);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
