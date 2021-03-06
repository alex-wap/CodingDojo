Socket {
  nsp: 
   Namespace {
     name: '/',
     server: 
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Circular],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     sockets: { '/#WX342LiwT9ATE_ihAAAA': [Circular] },
     connected: { '/#WX342LiwT9ATE_ihAAAA': [Circular] },
     fns: [],
     ids: 0,
     adapter: 
      Adapter {
        nsp: [Circular],
        rooms: [Object],
        sids: [Object],
        encoder: Encoder {} },
     _events: { connection: [Function] },
     _eventsCount: 1 },
  server: 
   Server {
     nsps: { '/': [Object] },
     _path: '/socket.io',
     _serveClient: true,
     _adapter: [Function: Adapter],
     _origins: '*:*',
     sockets: 
      Namespace {
        name: '/',
        server: [Circular],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        adapter: [Object],
        _events: [Object],
        _eventsCount: 1 },
     eio: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     httpServer: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 5,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::8080' },
     engine: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 } },
  adapter: 
   Adapter {
     nsp: 
      Namespace {
        name: '/',
        server: [Object],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        adapter: [Circular],
        _events: [Object],
        _eventsCount: 1 },
     rooms: { '/#WX342LiwT9ATE_ihAAAA': [Object] },
     sids: { '/#WX342LiwT9ATE_ihAAAA': [Object] },
     encoder: Encoder {} },
  id: '/#WX342LiwT9ATE_ihAAAA',
  client: 
   Client {
     server: 
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Object],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     conn: 
      Socket {
        id: 'WX342LiwT9ATE_ihAAAA',
        server: [Object],
        upgrading: false,
        upgraded: false,
        readyState: 'open',
        writeBuffer: [Object],
        packetsFn: [Object],
        sentCallbackFn: [],
        cleanupFn: [Object],
        request: [Object],
        remoteAddress: '::1',
        checkIntervalTimer: null,
        upgradeTimeoutTimer: null,
        pingTimeoutTimer: [Object],
        transport: [Object],
        _events: [Object],
        _eventsCount: 3 },
     encoder: Encoder {},
     decoder: Decoder { reconstructor: null, _callbacks: [Object] },
     id: 'WX342LiwT9ATE_ihAAAA',
     request: 
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/?EIO=3&transport=polling&t=1475107227719-0',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     onclose: [Function: bound ],
     ondata: [Function: bound ],
     onerror: [Function: bound ],
     ondecoded: [Function: bound ],
     sockets: { '/#WX342LiwT9ATE_ihAAAA': [Circular] },
     nsps: { '/': [Circular] },
     connectBuffer: [] },
  conn: 
   Socket {
     id: 'WX342LiwT9ATE_ihAAAA',
     server: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     upgrading: false,
     upgraded: false,
     readyState: 'open',
     writeBuffer: [ [Object] ],
     packetsFn: [ undefined ],
     sentCallbackFn: [],
     cleanupFn: [ [Function], [Function] ],
     request: 
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/?EIO=3&transport=polling&t=1475107227719-0',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     remoteAddress: '::1',
     checkIntervalTimer: null,
     upgradeTimeoutTimer: null,
     pingTimeoutTimer: 
      { _called: false,
        _idleTimeout: 85000,
        _idlePrev: [Object],
        _idleNext: [Object],
        _idleStart: 2411,
        _onTimeout: [Function],
        _repeat: null },
     transport: 
      XHR {
        readyState: 'open',
        discarded: false,
        closeTimeout: 30000,
        maxHttpBufferSize: 100000000,
        httpCompression: [Object],
        supportsBinary: true,
        _events: [Object],
        _eventsCount: 5,
        sid: 'WX342LiwT9ATE_ihAAAA',
        req: null,
        res: null,
        writable: false },
     _events: 
      { close: [Object],
        data: [Function: bound ],
        error: [Function: bound ] },
     _eventsCount: 3 },
  rooms: {},
  acks: {},
  connected: true,
  disconnected: false,
  handshake: 
   { headers: 
      { host: 'localhost:8080',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
        accept: '*/*',
        referer: 'http://localhost:8080/',
        'accept-encoding': 'gzip, deflate, sdch',
        'accept-language': 'en-US,en;q=0.8',
        cookie: 'io=R4rkCWMt74QyhwN9AAAA; SQLiteManager_currentLangue=2; session=eyJpZCI6MX0.Csx6kQ.ice9qrE7FL6AJgaEQVV-Z8L5Nt4' },
     time: 'Wed Sep 28 2016 17:00:27 GMT-0700 (PDT)',
     address: '::1',
     xdomain: false,
     secure: false,
     issued: 1475107227733,
     url: '/socket.io/?EIO=3&transport=polling&t=1475107227719-0',
     query: { EIO: '3', transport: 'polling', t: '1475107227719-0' } } }
Socket {
  nsp: 
   Namespace {
     name: '/',
     server: 
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Circular],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     sockets: 
      { '/#WX342LiwT9ATE_ihAAAA': [Object],
        '/#cxsF3uVFCIx5uwPwAAAB': [Circular] },
     connected: 
      { '/#WX342LiwT9ATE_ihAAAA': [Object],
        '/#cxsF3uVFCIx5uwPwAAAB': [Circular] },
     fns: [],
     ids: 0,
     adapter: 
      Adapter {
        nsp: [Circular],
        rooms: [Object],
        sids: [Object],
        encoder: Encoder {} },
     _events: { connection: [Function] },
     _eventsCount: 1 },
  server: 
   Server {
     nsps: { '/': [Object] },
     _path: '/socket.io',
     _serveClient: true,
     _adapter: [Function: Adapter],
     _origins: '*:*',
     sockets: 
      Namespace {
        name: '/',
        server: [Circular],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        adapter: [Object],
        _events: [Object],
        _eventsCount: 1 },
     eio: 
      Server {
        clients: [Object],
        clientsCount: 2,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     httpServer: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 5,
        _maxListeners: undefined,
        _connections: 2,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::8080' },
     engine: 
      Server {
        clients: [Object],
        clientsCount: 2,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 } },
  adapter: 
   Adapter {
     nsp: 
      Namespace {
        name: '/',
        server: [Object],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        adapter: [Circular],
        _events: [Object],
        _eventsCount: 1 },
     rooms: 
      { '/#WX342LiwT9ATE_ihAAAA': [Object],
        '/#cxsF3uVFCIx5uwPwAAAB': [Object] },
     sids: 
      { '/#WX342LiwT9ATE_ihAAAA': [Object],
        '/#cxsF3uVFCIx5uwPwAAAB': [Object] },
     encoder: Encoder {} },
  id: '/#cxsF3uVFCIx5uwPwAAAB',
  client: 
   Client {
     server: 
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Object],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     conn: 
      Socket {
        id: 'cxsF3uVFCIx5uwPwAAAB',
        server: [Object],
        upgrading: false,
        upgraded: false,
        readyState: 'open',
        writeBuffer: [Object],
        packetsFn: [Object],
        sentCallbackFn: [],
        cleanupFn: [Object],
        request: [Object],
        remoteAddress: '::1',
        checkIntervalTimer: null,
        upgradeTimeoutTimer: null,
        pingTimeoutTimer: [Object],
        transport: [Object],
        _events: [Object],
        _eventsCount: 3 },
     encoder: Encoder {},
     decoder: Decoder { reconstructor: null, _callbacks: [Object] },
     id: 'cxsF3uVFCIx5uwPwAAAB',
     request: 
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/?EIO=3&transport=polling&t=1475107229237-14',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     onclose: [Function: bound ],
     ondata: [Function: bound ],
     onerror: [Function: bound ],
     ondecoded: [Function: bound ],
     sockets: { '/#cxsF3uVFCIx5uwPwAAAB': [Circular] },
     nsps: { '/': [Circular] },
     connectBuffer: [] },
  conn: 
   Socket {
     id: 'cxsF3uVFCIx5uwPwAAAB',
     server: 
      Server {
        clients: [Object],
        clientsCount: 2,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     upgrading: false,
     upgraded: false,
     readyState: 'open',
     writeBuffer: [ [Object] ],
     packetsFn: [ undefined ],
     sentCallbackFn: [],
     cleanupFn: [ [Function], [Function] ],
     request: 
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/?EIO=3&transport=polling&t=1475107229237-14',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     remoteAddress: '::1',
     checkIntervalTimer: null,
     upgradeTimeoutTimer: null,
     pingTimeoutTimer: 
      { _called: false,
        _idleTimeout: 85000,
        _idlePrev: [Object],
        _idleNext: [Object],
        _idleStart: 3925,
        _onTimeout: [Function],
        _repeat: null },
     transport: 
      XHR {
        readyState: 'open',
        discarded: false,
        closeTimeout: 30000,
        maxHttpBufferSize: 100000000,
        httpCompression: [Object],
        supportsBinary: true,
        _events: [Object],
        _eventsCount: 5,
        sid: 'cxsF3uVFCIx5uwPwAAAB',
        req: null,
        res: null,
        writable: false },
     _events: 
      { close: [Object],
        data: [Function: bound ],
        error: [Function: bound ] },
     _eventsCount: 3 },
  rooms: {},
  acks: {},
  connected: true,
  disconnected: false,
  handshake: 
   { headers: 
      { host: 'localhost:8080',
        connection: 'keep-alive',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
        accept: '*/*',
        referer: 'http://localhost:8080/',
        'accept-encoding': 'gzip, deflate, sdch',
        'accept-language': 'en-US,en;q=0.8',
        cookie: 'io=WX342LiwT9ATE_ihAAAA; SQLiteManager_currentLangue=2; session=eyJpZCI6MX0.Csx6kQ.ice9qrE7FL6AJgaEQVV-Z8L5Nt4' },
     time: 'Wed Sep 28 2016 17:00:29 GMT-0700 (PDT)',
     address: '::1',
     xdomain: false,
     secure: false,
     issued: 1475107229242,
     url: '/socket.io/?EIO=3&transport=polling&t=1475107229237-14',
     query: { EIO: '3', transport: 'polling', t: '1475107229237-14' } } }

