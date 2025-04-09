'use client';

import React, { useState, useEffect } from 'react';

// サンプルデータ
const invoiceData = [
  {
    id: '#1846325',
    client: 'Flowbite LLC',
    email: 'flowbite@company.com',
    startDate: '02 Mar 2023',
    dueDate: '09 Mar 2023',
    amount: '$466',
    status: 'Paid'
  },
  {
    id: '#1846326',
    client: 'Bonnie Green',
    email: 'name@company.com',
    startDate: '08 Mar 2023',
    dueDate: '12 Mar 2023',
    amount: '$245',
    status: 'Paid'
  },
  {
    id: '#1846327',
    client: 'Jese Leos',
    email: 'jese@example.com',
    startDate: '12 Mar 2023',
    dueDate: '19 Mar 2023',
    amount: '$2000',
    status: 'Unpaid'
  },
  {
    id: '#1846328',
    client: 'Themesberg LLC',
    email: 'themesberg@example.com',
    startDate: '15 Apr 2023',
    dueDate: '23 Apr 2023',
    amount: '$90',
    status: 'Unpaid'
  },
  {
    id: '#1846329',
    client: 'Micheal Gough',
    email: 'micheal@example.com',
    startDate: '18 Apr 2023',
    dueDate: '20 Apr 2023',
    amount: '$3040',
    status: 'Pending'
  },
  {
    id: '#1846330',
    client: 'Lana Byrd',
    email: 'lana@example.com',
    startDate: '21 Apr 2023',
    dueDate: '30 Apr 2023',
    amount: '$2999',
    status: 'Paid'
  },
  {
    id: '#1846331',
    client: 'Netflix',
    email: 'netflix@example.com',
    startDate: '02 May 2023',
    dueDate: '09 May 2023',
    amount: '$1870',
    status: 'Overdue'
  },
  {
    id: '#1846332',
    client: 'Leslie Livingston',
    email: 'leslie@example.com',
    startDate: '05 May 2023',
    dueDate: '05 Jun 2023',
    amount: '$5067',
    status: 'Unpaid'
  },
  {
    id: '#1846333',
    client: 'Bergside LLC',
    email: 'bergside@example.com',
    startDate: '29 May 2023',
    dueDate: '31 May 2023',
    amount: '$60',
    status: 'Pending'
  },
  {
    id: '#1846334',
    client: 'Robert Brown',
    email: 'robert@example.com',
    startDate: '17 Jun 2023',
    dueDate: '24 Jun 2023',
    amount: '$76',
    status: 'Paid'
  },
];

export function InvoiceTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: 'asc' | 'desc' | null;
  }>({
    key: null,
    direction: null
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(invoiceData.map(invoice => invoice.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectInvoice = (id: string) => {
    if (selectedInvoices.includes(id)) {
      setSelectedInvoices(selectedInvoices.filter(item => item !== id));
    } else {
      setSelectedInvoices([...selectedInvoices, id]);
    }
  };

  const handleFilterChange = (status: string) => {
    setFilterStatus(status);
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc';
      } else if (sortConfig.direction === 'desc') {
        direction = null;
      }
    }
    
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key) {
      return (
        <svg className="w-3 h-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
        </svg>
      );
    }
    
    if (sortConfig.direction === 'asc') {
      return (
        <svg className="w-3 h-3 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Z"/>
        </svg>
      );
    }
    
    if (sortConfig.direction === 'desc') {
      return (
        <svg className="w-3 h-3 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.426 12.976H8.574a2.074 2.074 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.122 2.122 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
        </svg>
      );
    }
    
    return (
      <svg className="w-3 h-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
      </svg>
    );
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Unpaid':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    if (dropdownOpen === id) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(id);
    }
  };

  // ドロップダウン以外の場所をクリックしたときにドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && !(event.target as HTMLElement).closest('[data-dropdown]')) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const filteredInvoices = invoiceData
    .filter(invoice => 
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(invoice => filterStatus === 'all' || invoice.status.toLowerCase() === filterStatus.toLowerCase());

  // ソート機能を適用
  const sortedInvoices = React.useMemo(() => {
    const sortableItems = [...filteredInvoices];
    if (sortConfig.key && sortConfig.direction) {
      sortableItems.sort((a, b) => {
        // 各カラムごとに適切なソート方法を適用
        if (sortConfig.key === 'amount') {
          // 金額のソート: $記号を取り除いて数値として比較
          const aAmount = parseFloat(a.amount.replace('$', '').replace(',', ''));
          const bAmount = parseFloat(b.amount.replace('$', '').replace(',', ''));
          return sortConfig.direction === 'asc' 
            ? aAmount - bAmount 
            : bAmount - aAmount;
        }
        
        if (sortConfig.key === 'startDate' || sortConfig.key === 'dueDate') {
          // 日付のソート: DD MMM YYYY形式を日付オブジェクトに変換して比較
          const parseDate = (dateStr: string) => {
            const [day, month, year] = dateStr.split(' ');
            const monthMap: {[key: string]: number} = {
              'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
              'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
            };
            return new Date(parseInt(year), monthMap[month], parseInt(day));
          };
          
          const dateA = parseDate(a[sortConfig.key as keyof typeof a] as string);
          const dateB = parseDate(b[sortConfig.key as keyof typeof b] as string);
          
          return sortConfig.direction === 'asc' 
            ? dateA.getTime() - dateB.getTime() 
            : dateB.getTime() - dateA.getTime();
        }
        
        // 文字列のソート（ID、クライアント名、メール、ステータスなど）
        const aValue = a[sortConfig.key as keyof typeof a];
        const bValue = b[sortConfig.key as keyof typeof b];
        
        if (sortConfig.direction === 'asc') {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });
    }
    return sortableItems;
  }, [filteredInvoices, sortConfig]);

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg mb-4">
      {/* Table header with search and filters */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 mb-4">
          <div className="flex-1 flex md:w-1/2">
            <div className="relative flex items-stretch w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input 
                type="text" 
                className="bg-gray-50 border border-gray-300 border-r-0 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" 
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Search
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-4">
            <div className="relative ml-4">
              <button 
                className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center"
                onClick={() => toggleDropdown('filters')}
                data-dropdown
              >
                <svg className="w-4 h-4 mr-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
                Filters
                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {dropdownOpen === 'filters' && (
                <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-dropdown w-72" data-dropdown>
                  <div className="p-4">
                    <h6 className="mb-3 text-sm font-medium text-gray-900">Filter</h6>
                    <div className="space-y-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-900">Status</label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white border border-gray-200 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50">
                            <span className="text-sm">Paid</span>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50">
                            <span className="text-sm">Unpaid</span>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50">
                            <span className="text-sm">Pending</span>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50">
                            <span className="text-sm">Overdue</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-4">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">
                      Apply filters
                    </button>
                    <button className="text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5">
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 inline-flex items-center"
                onClick={() => toggleDropdown('configs')}
                data-dropdown
              >
                <svg className="w-4 h-4 mr-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Configurations
                <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {dropdownOpen === 'configs' && (
                <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-dropdown w-60" data-dropdown>
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Show all columns</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Compact view</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Export data</a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg className="w-3.5 h-3.5 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
                <span className="font-medium">Create an invoice</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-sm font-medium text-gray-900">Show only:</span>
          
          <div className="flex items-center">
            <input 
              id="all" 
              type="radio" 
              name="filter" 
              value="all" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
              checked={filterStatus === 'all'} 
              onChange={() => handleFilterChange('all')}
            />
            <label htmlFor="all" className="ml-2 text-sm font-medium text-gray-900">All</label>
          </div>
          
          <div className="flex items-center">
            <input 
              id="unpaid" 
              type="radio" 
              name="filter" 
              value="unpaid" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
              checked={filterStatus === 'unpaid'} 
              onChange={() => handleFilterChange('unpaid')}
            />
            <label htmlFor="unpaid" className="ml-2 text-sm font-medium text-gray-900">Unpaid</label>
          </div>
          
          <div className="flex items-center">
            <input 
              id="paid" 
              type="radio" 
              name="filter" 
              value="paid" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
              checked={filterStatus === 'paid'} 
              onChange={() => handleFilterChange('paid')}
            />
            <label htmlFor="paid" className="ml-2 text-sm font-medium text-gray-900">Paid</label>
          </div>
          
          <div className="flex items-center">
            <input 
              id="pending" 
              type="radio" 
              name="filter" 
              value="pending" 
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" 
              checked={filterStatus === 'pending'} 
              onChange={() => handleFilterChange('pending')}
            />
            <label htmlFor="pending" className="ml-2 text-sm font-medium text-gray-900">Pending</label>
          </div>
        </div>
      </div>
      
      {/* Table content */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 invoice-table">
          <thead className="text-xs font-semibold text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input 
                    id="checkbox-all" 
                    type="checkbox" 
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">Invoice ID</th>
              <th scope="col" className="px-6 py-3">Client</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Start Date
                  <button className="ml-1 p-0.5" onClick={() => handleSort('startDate')}>
                    {getSortIcon('startDate')}
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Due Date
                  <button className="ml-1 p-0.5" onClick={() => handleSort('dueDate')}>
                    {getSortIcon('dueDate')}
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                <div className="flex items-center justify-end">
                  Amount
                  <button className="ml-1 p-0.5" onClick={() => handleSort('amount')}>
                    {getSortIcon('amount')}
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Status
                  <button className="ml-1 p-0.5" onClick={() => handleSort('status')}>
                    {getSortIcon('status')}
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedInvoices.map((invoice) => (
              <tr key={invoice.id} className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input 
                      id={`checkbox-${invoice.id}`} 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      checked={selectedInvoices.includes(invoice.id)}
                      onChange={() => handleSelectInvoice(invoice.id)}
                    />
                    <label htmlFor={`checkbox-${invoice.id}`} className="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white">
                  {invoice.id}
                </th>
                <td className="px-6 py-4">{invoice.client}</td>
                <td className="px-6 py-4 text-gray-500">{invoice.email}</td>
                <td className="px-6 py-4">{invoice.startDate}</td>
                <td className="px-6 py-4">{invoice.dueDate}</td>
                <td className="px-6 py-4 text-right">{invoice.amount}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getStatusBadgeClass(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right relative">
                  <button 
                    data-dropdown
                    onClick={() => toggleDropdown(`row-${invoice.id}`)}
                    className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
                  >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                    </svg>
                  </button>
                  {dropdownOpen === `row-${invoice.id}` && (
                    <div className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44" data-dropdown>
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                            <svg className="w-4 h-4 mr-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                            </svg>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                            <svg className="w-4 h-4 mr-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            View
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                            <svg className="w-4 h-4 mr-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            Archive
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100">
                            <svg className="w-4 h-4 mr-2 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <nav className="flex items-center justify-between p-4 border-t border-gray-200" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500">
          Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1000</span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">1</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">100</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
} 