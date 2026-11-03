const MorAI = (() => {
  const state = {
    view: 'overview',
    query: '',
    selectedId: null,
    portal: 'מור AI',
    leads: [
      { id: 1, name: 'רונית לוי', business: 'סטודיו פילאטיס', status: 'new', priority: 'גבוהה', need: 'מעקב אחרי מתעניינות ותיאום שיעורים', received: 'היום, 09:42', contact: '050-1234567', systems: 'WhatsApp, Google Sheets' },
      { id: 2, name: 'אורי כהן', business: 'שירותי אחזקה', status: 'work', priority: 'בינונית', need: 'הצעות מחיר, תיאום צוות ומעקב לקוחות', received: 'אתמול, 16:20', contact: '052-9876543', systems: 'WhatsApp, Excel' },
      { id: 3, name: 'שירה אדרי', business: 'קליניקה פרטית', status: 'work', priority: 'בינונית', need: 'קליטת פנייה, תזכורות ותיאום פגישות', received: 'אתמול, 13:05', contact: '054-7654321', systems: 'יומן, WhatsApp' },
      { id: 4, name: 'תמר פרץ', business: 'חנות אונליין', status: 'sent', priority: 'נמוכה', need: 'שיווק, שירות ומעקב אחר הזמנות', received: '02.11.26', contact: '053-2223344', systems: 'Shopify, Mailchimp' },
      { id: 5, name: 'גיא ברק', business: 'משרד תכנון', status: 'sent', priority: 'נמוכה', need: 'ניהול משימות, מסמכים והצעות ללקוחות', received: '01.11.26', contact: '050-5556677', systems: 'Drive, Email' }
    ]
  };
  const labels = { new: 'פנייה חדשה', work: 'בטיפול', sent: 'דמו נשלח' };
  const statusLabel = status => labels[status] || status;
  const filtered = () => state.leads.filter(l => !state.query || `${l.name} ${l.business} ${l.need}`.includes(state.query));
  const metrics = () => ({ new: state.leads.filter(l => l.status === 'new').length, work: state.leads.filter(l => l.status === 'work').length, sent: state.leads.filter(l => l.status === 'sent').length });
  const select = id => { state.selectedId = id; };
  const addLead = data => { const lead = { id: Date.now(), name: data.name || 'פנייה חדשה', business: data.business || 'עסק חדש', status: 'new', priority: 'חדשה', need: data.need || 'טרם נותח', received: 'עכשיו', contact: data.contact || 'טרם צוין', systems: data.systems || 'טרם צוין' }; state.leads.unshift(lead); state.selectedId = lead.id; return lead; };
  const getSelected = () => state.leads.find(l => l.id === state.selectedId) || null;
  return { state, labels, statusLabel, filtered, metrics, select, addLead, getSelected };
})();

if (typeof window !== 'undefined') window.MorAI = MorAI;
if (typeof module !== 'undefined') module.exports = MorAI;
