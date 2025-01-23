// lists.js
const lists = [
    {
      type: 'FlatList',
      data: [
        { key: '1', text: 'Item 1' },
        { key: '2', text: 'Item 2' },
        { key: '3', text: 'Item 3' },
      ],
    },
    {
      type: 'SectionList',
      data: [
        {
          title: 'Section 1',
          data: [
            { key: '1', text: 'Item 1' },
            { key: '2', text: 'Item 2' },
          ],
        },
        {
          title: 'Section 2',
          data: [
            { key: '3', text: 'Item 3' },
            { key: '4', text: 'Item 4' },
          ],
        },
      ],
    },
    
  ];
  
  export default lists;